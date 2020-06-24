import express from 'express'
import serverRenderer from './renderer'
//import * as U from 'site/urls'
//
console.log('OK => Loading the sitemap dev server')

const PORT = 3888

const app = express()
const router = express.Router()

const logRequestStart = (req, res, next) => {
  console.info(`${req.method} ${req.originalUrl}`)
  next()
}

/*
console.log(
  U.BLOG,
  U.FORM,
  U.GUIDES,
  U.LANDING,
  U.STATIC
)
*/

app.use(logRequestStart)

router.use('[-a-z1-9.\/]+', serverRenderer)

app.use(router)

app.listen(PORT, (error) => {
  if (error) {
    return console.log('something bad happened', error)
  }

  console.log('🛹 Listening on ' + PORT + '...')
})


