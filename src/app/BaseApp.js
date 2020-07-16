import * as React from 'react'
import { useEffect } from 'react'
import { SiteContextProvider } from '@fwrlines/ds'

import { useLocation } from 'react-router-dom'

import ga from 'react-ga'

//import { IntlProvider } from 'react-intl'

import App from './App'

//import localizedMessages from 'translations/it.json'

import siteContextConfig from 'config/siteContext'

export default (props) => {

  const location = useLocation()

  //Tracking code with ga

  useEffect(() => {
    ga.initialize(
      process.env.GOOGLE_ANALYTICS_ID,
      {
        debug:process.env.DEBUG === 'true'
      }
    )
  }, [])

  useEffect(() => {
    const page = location.pathname
    ga.set({ page })
    ga.pageview( page )

  }
  , [location.pathname])

  //End of racking code with ga


  return (
    <SiteContextProvider
      config={siteContextConfig}
      initialTheme="system"
    >
      <App {...props} />
    </SiteContextProvider>
  )
}

