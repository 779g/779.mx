import * as React from 'react'

import { urljoin as _u, loadable } from 'utils'

import { MainLayout } from './layouts'

import { tree as navTree } from './navigation'

import MODULE_URLS from './urls'

//import { AUTH as AUTH_URLS } from '../urls.js'

const MODULE_NAME = 'app.dashboard'


const internalRoutes = [
  {
    path     :MODULE_URLS.HOME,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/Home.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.PROFILE,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/Profile.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.WEBSITE_HOME,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/WebsiteHome.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.SHOP_HOME,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/ShopHome.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.SHOP_DETAILS,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/ShopDetails.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.SHOP_HOURS,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/ShopHours.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.SHOP_CONTACT,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/ShopContact.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.ACCOUNT_HOME,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/AccountHome.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.ACCOUNT_PROFILE,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/Profile.js')),
    //component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/AccountProfile.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.ACCOUNT_GOOGLE_INTEGRATION,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/AccountGoogleIntegration.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.PLAN_HOME,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/PlanHome.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.PLAN_DETAILS,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/PlanDetails.js')),
    exact    :true,
    isPrivate:true
  },
  {
    path     :MODULE_URLS.PLAN_PAYMENT,
    component:loadable(() => import (/* webpackChunkName: `app.dashboard` */ './pages/PlanPayment.js')),
    exact    :true,
    isPrivate:true
  }
]

export default [
  {
    path  :MODULE_URLS.all,
    render:(props) => (<MainLayout
      routes={internalRoutes}
      navTree={navTree}
      {...props}
    />)
    //isPrivate:true
  }
]
