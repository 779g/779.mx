import * as React from 'react'
import MODULE_URLS from '../urls'
import { AUTH as AUTH_URLS } from 'site/urls'

import { FormattedMessage } from 'react-intl'

import messages from './messages'

export default {
  title   :'WebOffice',
  pathname:MODULE_URLS.HOME,
  //logo:'/illustrations/iso-car.png',
  //redirectFromPathname:'/',
  subItems:[
    {
      //section :'',
      title   :<FormattedMessage {...messages.home} />,
      pathname:MODULE_URLS.HOME
      //redirectFromPathname:'/website/',
    },
    {
      //section :<FormattedMessage {...messages.}>,
      section :'WebOfficina',
      title   :<FormattedMessage {...messages.website} />,
      pathname:MODULE_URLS.WEBSITE_HOME
      //redirectFromPathname:'/website/',
    },
    {
      section :'WebOfficina',
      title   :<FormattedMessage {...messages.shop} />,
      //title   :'My images',
      pathname:MODULE_URLS.SHOP_HOME,
      //logo:'/illustrations/iso-shop.png',
      subItems:[
        {
          //section:''
          title   :<FormattedMessage {...messages.shop_hours} />,
          pathname:MODULE_URLS.SHOP_HOURS
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.shop_contact} />,
          pathname:MODULE_URLS.SHOP_CONTACT
        }
      ]
      //redirectFromPathname:'/media/',
    },
    {
      //section :'Account',
      section :<FormattedMessage {...messages.account_label} />,
      title   :<FormattedMessage {...messages.account} />,
      pathname:MODULE_URLS.ACCOUNT_HOME,
      logo:'/illustrations/iso-computer.png',
      //redirectFromPathname:['/account/', '/account/profile/'],
      subItems:[
        {
          //section:''
          title   :<FormattedMessage {...messages.account_home} />,
          pathname:MODULE_URLS.ACCOUNT_HOME
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.account_profile} />,
          pathname:MODULE_URLS.ACCOUNT_PROFILE
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.account_google_integration} />,
          pathname:MODULE_URLS.ACCOUNT_GOOGLE_INTEGRATION
        }
      ]
    },
    {
      section :<FormattedMessage {...messages.account_label} />,
      title   :<FormattedMessage {...messages.billing} />,
      pathname:MODULE_URLS.PLAN_HOME,
      //redirectFromPathnames:['/plan/', '/plan/profile'],
      subItems:[
        {
          //section:''
          title   :<FormattedMessage {...messages.billing_home} />,
          pathname:MODULE_URLS.PLAN_HOME
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.billing_plan} />,
          pathname:MODULE_URLS.PLAN_DETAILS
        },
        {
          //section:''
          title   :<FormattedMessage {...messages.billing_payment} />,
          pathname:MODULE_URLS.PLAN_PAYMENT
        }
      ]
    },
    /*
    {
      section :<FormattedMessage {...messages.account} />,
      title   :'Profile Info',
      pathname:MODULE_URLS.PROFILE2
    },
    */
    {
      section :<FormattedMessage {...messages.account_label} />,
      title   :<FormattedMessage {...messages.logout} />,
      pathname:AUTH_URLS.LOGOUT
    }
  ]
}

