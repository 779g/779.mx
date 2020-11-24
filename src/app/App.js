import React, { useEffect } from 'react'

import {
  Album,
  SwitchRouteMap
} from '@fwrlines/ds'

import slides from './slides'

//import routes from './allRoutes.js'

const App = () => {
  const isClient = !(typeof window === 'undefined')

  useEffect(() => {
    if (isClient) {
      slides.forEach(e => {
        const img = new Image()
        img.src = e.source
      })
    }
  }, []

    
  )
  return (
    <>
      <Album slides={slides} />
      {/*
      <SwitchRouteMap
        routes={routes}
        NotFound={<Redirect to={'404'} />}
      />*/}
    </>
  )
}


export default App
