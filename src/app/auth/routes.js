/* @fwrlines/generator-react-component 2.1.3 */
import { urljoin as _u, loadable } from 'utils'

import MODULE_URLS from './urls'

import { Logout } from '@fwrlines/ds'

const moduleName = 'app.auth'

const redeemParam = ':code([0-9a-z-]{64})'

export default [
  //oAuth2 Redeemer
  {
    path     :_u(MODULE_URLS.REDEEM, redeemParam),
    component:loadable(() => import (/* webpackChunkName: `app.auth` */ './components/Redeemer/Redeemer.js'))
  },
  //oAuth2 Login
  {
    path     :MODULE_URLS.LOGIN,
    component:loadable(() => import (/* webpackChunkName: `app.auth` */ './pages/Login.js'))
  },
  //Regular logout
  {
    path     :MODULE_URLS.LOGOUT,
    component:Logout,
    isPrivate:true
  },
  //Regular unauthorized login
  {
    path     :MODULE_URLS.UNAUTHORIZED,
    component:loadable(() => import (/* webpackChunkName: `app.auth` */ './pages/Unauthorized.js'))
  }
]
