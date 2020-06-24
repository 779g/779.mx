/* eslint-disable no-console */
import patchAlias from './patchAlias'
require('dotenv').config()
import express from 'express'
import serverRenderer from './renderer.js'
import path from 'path'


const PORT = process.env.PORT || 3003

// initialize the application and create the routes
const app = express()
const router = express.Router()

const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  next()
}

app.use(logRequestStart)

/* root (/) should always serve our server rendered page
   router.use('^/$', serverRenderer) */
router.use('[-a-z1-9\/]+', serverRenderer)
// other static resources should just be served as they are
router.use(express.static(path.resolve(__dirname, '..', '..', 'public')))
router.use(express.static(
  path.resolve(__dirname, '..', '..','dist', 'static'),
  { maxAge: '30d' },
))
//router.use('*', serverRenderer)

// tell the app to use the above rules
app.use(router)

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log('🛹 Listening on ' + PORT + '...')
})


