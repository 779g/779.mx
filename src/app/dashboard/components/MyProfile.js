/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
//import {} from 'react'
//import PropTypes from 'prop-types'
import { useContext } from 'react'

import { CircleInfo, SessionContext } from '@fwrlines/ds'

import { Link } from 'react-router-dom'


//Config
//import C from 'ui/cssClasses'


/**
 * Use `MySession` to
 * Description :
 */

//export default () => <h2>Wks</h2>

const MyProfile = ({
}) => {

  const {
    currentUserData:data={},
    currentUserLoading
    //logoutPath
  } = useContext(SessionContext)
  
  console.log('EXE => Consumer, context is', data)

  const oAuthProfileData = data.oAuth2Profiles ? data.oAuth2Profiles.find(e => e.provider == 'google') : {}
  const od = oAuthProfileData

  return (
    <>
      { !data ?
        'You are not connected' :
        <>
          <CircleInfo
            title={od.name}
            subtitle={od.email}
            className={'s3 k-s'}
            //circleClassName={ e.circle }
            image={od.picture}
            imageAlt={od.name}
          />
        </>

      }
    </>

  )
}

/*
MyProfile.propTypes = {
}
*/

/*
MyProfile.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default MyProfile
