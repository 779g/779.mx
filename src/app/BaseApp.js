import * as React from 'react'

import { SiteContextProvider } from '@fwrlines/ds'

//import { IntlProvider } from 'react-intl'

import App from './App'

//import localizedMessages from 'translations/it.json'

import siteContextConfig from 'config/siteContext'

export default (props) => (
  <SiteContextProvider
    config={siteContextConfig}
    initialTheme="system"
  >
    <App {...props} />
  </SiteContextProvider>
)

