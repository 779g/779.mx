import { loadable } from 'utils'
export default loadable(() => import(

  /* webpackChunkName: "chunk-bar-baz" */
  /* webpackPreload: true */
  './Clock.js'))

