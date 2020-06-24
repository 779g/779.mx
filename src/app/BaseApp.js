import * as React from 'react'

import { SiteContextProvider } from '@fwrlines/ds'

import { IntlProvider } from 'react-intl'

import App from './App'

import localizedMessages from 'translations/it.json'

import siteContextConfig from 'config/siteContext'

export default (props) => (
  <SiteContextProvider
    config={siteContextConfig}
    initialTheme="system"
  >
    { 'If this text shows, the decorators are correctly applied' }
    <IntlProvider
      locale={'it'}
      messages={localizedMessages}
    >
      <App {...props} />
    </IntlProvider>
  </SiteContextProvider>
)

