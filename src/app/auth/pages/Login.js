/* @fwrlines/generator-react-component 2.1.3 */
import * as React from 'react'
import { useEffect, useContext } from 'react'
import PropTypes from 'prop-types'

import { Page, Heading, SessionContext } from '@fwrlines/ds'
import { LoginButton } from '../components'

import { useHistory } from 'react-router-dom'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

//Config
//import C from 'ui/cssClasses'

//const baseClassName = 'page_login'
const baseId = 'page_login'

const helmet = {
  robots   :'noindex, nofollow',
  //title              :'test of the title',
  title_tag:'this should appear in the title tag'
  //canonical          :'https://home.com/description',
  //meta_description   :'This is the meta description. 170 chars.',
  //twitter_title      :'For twitter, a title',
  //twitter_description:'',
  //twitter_image      :'',
  //og_title           :'This is the open graph title',
  //og_description     :'',
  //og_image           :'',
  //og_type            :'',
  //og_url             :''
}

const mainHeadingProps = {
  //id,
  //className:'uc',
  //style,
  //children, //appended at bottom

  subtitle:<FormattedMessage {...messages.loginSubtitle} />,
  //subtitleClassName,
  //subtitleProps:{},

  heading  :<FormattedMessage {...messages.loginTitle} />,
  //headingClassName:'ts-green',
  headingAs:'h1'
  //headingProps :{}

  //label           :'Film',
  //labelClassName  :'x-red basic',
  //labelAs:'p',
  //labelProps :{}
}

/**
 * Page `Login`
 * Description :
 */
const Login = ({
  //someprop
}) => {

  const { isConnected, dashboardHomePath } = useContext(SessionContext)

  const history = useHistory()

  useEffect(() => {
    if (isConnected) history.push(dashboardHomePath)
  }
  ,
  [history, dashboardHomePath, isConnected]
  )

  return (
    <Page id={baseId}>
      <Page.Section
        head
        className="p-u u2"
        id="head"
      >
    
        <Heading {...mainHeadingProps} />
      </Page.Section>
      <Page.Section
        id="a1"
        className="p-u u2"
      >
        <LoginButton />
      </Page.Section>
    </Page>
  )

}

Login.propTypes = {

  /**
   *
   */
  someprop:PropTypes.node

  /*
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  children: PropTypes.node,
  : PropTypes.func,
  styles: PropTypes.object,
  : PropTypes.oneOf(['', ''])
  */
}

/*
Login.defaultProps = {
  status: 'neutral',
}
*/


export default Login
