/* @fwrlines/generator-react-component 2.1.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Page, Heading } from '@fwrlines/ds'

import { MyProfile } from '../components'

//Config
//import C from 'ui/cssClasses'

//const baseClassName = 'page_profile'
const baseId = 'page_profile'

const helmet = {
  robots   :'noindex, nofollow',
  title    :'test of the title',
  title_tag:'this should appear in the title tag'

  /*
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
  */
}

const mainHeadingProps = {
  //id,
  //className:'uc',
  //style,
  //children, //appended at bottom

  subtitle:'In this page you can view and modify information related to your profile on this website.',
  //subtitleClassName,
  //subtitleProps:{},

  heading         :'My Profile',
  headingClassName:'ts-green',
  headingAs       :'h1'
  //headingProps :{}

  //label           :'Film',
  //labelClassName  :'x-red basic',
  //labelAs:'p',
  //labelProps :{}
}

/**
 * Page `Profile`
 * Description :
 */
const Profile = ({
  history,
  location,
  match
}) => (
  <Page
    id={baseId}
    itemType="https://schema.org/FAQPage"
    HELMET={helmet}
  >
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
      <MyProfile />
    </Page.Section>
    <Page.Section
      id="a2"
      className="p-u u2"
    >
      <p>Here a form to edit your data</p>
    
    </Page.Section>
  </Page>
)

Profile.propTypes = {

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
Profile.defaultProps = {
  status: 'neutral',
}
*/


export default Profile
