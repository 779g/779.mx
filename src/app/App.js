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
      <h1 className="x-primary c-x">Hello there</h1>
      <Paginator paginator={{ totalPages: 200, page: 77 }} />
      <HorizontalBar>Hey</HorizontalBar>
      <FormattedMessage {...messages.unauthorizedContact} />
      <AnimatedVCaret
        active={active}
        setActive={setActive}
        id="myarrow"
        width="200px"
      />
      <GraphQLTester />
      <SwitchRouteMap
        routes={routes}
        NotFound={<Redirect to={'404'} />}
      />
      {/*}
      <MyProfile />
              <Clock
                thing="thing"
                thing2="thing2"
              />
              {' '}
              <QueryTester />
Includes
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to={loginPath}>LOGIN</Link>
          </li>
          <li>
            <Link to="/d/profile">My account</Link>
          </li>
        </ul>
      </nav>
      */}
    </>
  )
}


export default App
