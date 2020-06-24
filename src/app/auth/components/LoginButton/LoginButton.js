/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

//Config
//import C from 'ui/cssClasses'
//
import QUERY from './graphql/oAuth2Google.graphql'

import {
  OLoginButton as LoginButton
} from '@fwrlines/ds'

/**
 * Use `LoginButton` to
 * Has color `x`
 */

const LocalLoginButton = ({
  providerName,
  dataKey,
  query,
  ...props
}) => (
  <LoginButton
    {...props}
    simple={false}
    query={query}
    dataKey={dataKey}
    providerName={providerName}
  />
)

LocalLoginButton.propTypes = {

  /**
   *
   */
  label:PropTypes.string,

  /**
   *
   */
  query:PropTypes.string,

  /**
   *
   */
  dataKey:PropTypes.string
}

LocalLoginButton.defaultProps = {
  query  :QUERY,
  dataKey:'oAuth2Google'
}

export default LocalLoginButton
