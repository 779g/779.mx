/* @fwrlines/generator-react-component 2.1.5 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import {
  SiteContext,
  DownshiftSelect
} from '@fwrlines/ds'

import { FormattedMessage } from 'react-intl'
import messages from './messages'

//Config
//import C from 'ui/cssClasses'

//Relative imports

import { isBackend } from 'utils/isBackend'

if (!isBackend) {
  import('./theme_selector.scss')
}

const baseClassName = 'theme_selector'


const themeOptions = [
  {
    value:'light',
    id   :'light',
    label:<FormattedMessage {...messages.lightTheme} />
  },
  {
    value:'dark',
    id   :'dark',
    label:<FormattedMessage {...messages.darkTheme} />
  },
  {
    value:'iceberg',
    id   :'iceberg',
    label:'Iceberg'
  },
  {
    value:'system',
    id   :'sys',
    label:<FormattedMessage {...messages.systemTheme} />
  }
]

/**
 * Use `ThemeSelector` to
 * Has color `x`
 */
const ThemeSelector = ({
  id,
  className,
  style
}) => {

  const {
    preferredTheme,
    setPreferredTheme:setInputValue
    //userTheme,
  } = useContext(SiteContext)

  return (
    <span
      className={[
        baseClassName,
        'x-metadata c-x',
        className
      ].filter(e => e).join(' ')}
      id={id}
      style={style}

    >
      <span>
        <FormattedMessage {...messages.theme} />
        &nbsp;
        {':'}
      </span>
      <DownshiftSelect
        inputId="dashboard-theme-selector"
        //label="Please select your favourite fruit"
        options={themeOptions}
        //description="Here is a list of very tasty fruits you can choose your favourite from"
        aesthetic="mars"
        setInputValue={setInputValue}
        value={preferredTheme}
        style={{
          display:'inline-block',
          width  :'auto'
        }}
        buttonProps={{
          className:'x-subtitle',
          simple   :true,
          icon     :'j',
          iconSide :'r'
        }}
      />
    </span>
  )
}

ThemeSelector.propTypes = {

  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,

  /**
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * The height of the element
   */
  height:PropTypes.string,

  /**
   * The width of the element
   */
  width:PropTypes.string

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
ThemeSelector.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default ThemeSelector
