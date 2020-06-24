/* @fwrlines/generator-react-component 2.1.3 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'


import {
  DashboardContextProvider,
  DashboardNavigation,
  DashboardMain,
  SwitchRouteMap,
  SiteContext
} from '@fwrlines/ds'

import {
  ThemeSelector
} from '../components'

/**
 * Use `Layout` to
 * Has color `x`
 */
const Layout = ({
  routes,
  navTree,
  ...props
}) => {

  //console.log('executing the layout', props)

  const { userTheme } = useContext(SiteContext)
  
  return (
    <DashboardContextProvider>
      <DashboardNavigation
        tree={navTree}
        footer={<ThemeSelector />}
      />
      <DashboardMain >
        <DashboardNavigation.HorizontalBar
          className="md-h lg-h u50"
          label={'blah'}
        />
        <SwitchRouteMap
          routes={routes}
          NotFound={
            <div
              style={{ height: '120vh' }}
            >
       Content Goes here
            </div>
          }
        />
      </DashboardMain>
    </DashboardContextProvider>
 
  )
}

Layout.propTypes = {

  /**
   * Please refer to `@fwrlines/ds/SwitchRouteMap`
   */
  routes:PropTypes.arrayOf(PropTypes.object),

  /**
   * Please refer to tree in `@fwrlines/ds/DashboardNavigation`
   */
  navTree:PropTypes.object

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  */
}

/*
Layout.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

export default Layout
