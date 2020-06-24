/* @fwrlines/generator-react-component 2.2.3 */
import { defineMessages } from 'react-intl'

const messages = defineMessages({
  loginTitle:{
    id            :'app.auth.pages.login.title',
    defaultMessage:'Dashboard Access',
    description   :'Dashboard Login Page Title'
  },
  loginSubtitle:{
    id            :'app.auth.pages.login.subtitle',
    defaultMessage:'Login below to your dashboard account',
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

export default messages
