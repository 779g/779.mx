import React, { useState, useContext } from 'react'
//import Prototypes from 'prototypes' //Capitalize, etc
import { Switch, Redirect, Route, Link } from 'react-router-dom'

//import NotFound from './NotFound.js'

//import oAuth2Routes from './oauth2/routes'
//import Clock from 'ui/test/AsyncClock'
//import QueryTester from 'ui/test/QueryTester'
//import { MyProfile } from 'ui/local/dashboardMain'

import {
  AnimatedVCaret,
  Paginator,
  HorizontalBar,
  SwitchRouteMap,
  GraphQLTester
} from '@fwrlines/ds'

/* @fwrlines/generator-react-component 2.2.3 */
import { defineMessages, FormattedMessage } from 'react-intl'

const messages = defineMessages({
  loginTitle:{
    id            :'app.auth.pages.login.title',
    defaultMessage:'Dashboard Access',
    description   :'Dashboard Login Page Title'
  },
  loginSubtitle:{
    id            :'app.auth.pages.login.subtitle',
    defaultMessage:'Login here to your dashboard account',
    description   :'Subtitle for the login page'
  },
  unauthorizedTitle:{
    id            :'app.auth.pages.unauthorized.title',
    defaultMessage:'Unauthorized',
    description   :'Subtitle for the unauthorized page'
  },
  unauthorizedSubtitle:{
    id            :'app.auth.pages.unauthorized.subtitle',
    defaultMessage:'Your have sucessfully connected your account, but you are not allowed to log in.',
    description   :'Subtitle for the unauthorized page'
  },
  unauthorizedExplanation:{
    id            :'app.auth.pages.unauthorized.explanation',
    defaultMessage:'You can try to login with another account. Alternatively, if you believe this is a mistake',
    description   :'Text for the unauthorized page'
  },
  unauthorizedContact:{
    id            :'app.auth.pages.unauthorized.contact',
    defaultMessage:'you can contact support here.',
    description   :'Contact support when theres a login problem'
  }
})


import routes from './allRoutes.js'

const App = () => {
  const [active, setActive] = useState(false)

  return (
    <>
      <AnimatedVCaret
        active={active}
        setActive={setActive}
        id="myarrow"
        width="200px"
      />
      {/*
      <SwitchRouteMap
        routes={routes}
        NotFound={<Redirect to={'404'} />}
      />*/}
    </>
  )
}


export default App
