console.log('RDR')
import template from './template.xml'
import CONFIG from 'config'
import * as U from 'app/urls'

import { format } from 'date-fns'
//import { request } from 'graphql-request'

import {
  urljoin as _u
} from 'utils'

/* lastmod options


    always
    hourly
    daily
    weekly
    monthly
    yearly
    never


*/


/* priority

The priority of this URL relative to other URLs on your site. Valid values range from 0.0 to 1.0. This value does not affect how your pages are compared to pages on other sites—it only lets the search engines know which pages you deem most important for the crawlers.

The default priority of a page is 0.5.

*/

const STATIC_MAP = {
  HOME:{
    changefreq:'yearly',
    priority  :.5,
    lastmod   :new Date('2019-10-02')
  },
  ANOTHERPAGE:{
    changefreq:'daily',
    priority  :.5,
    lastmod   :new Date('2019-09-12')
  }
}


export default async (req, res) => {
  const today = new Date()

  const paths = [
  ]

  Object.keys(U.STATIC).forEach((key) => {
    const { changefreq, priority, lastmod }= STATIC_MAP[key]
    const loc = U.STATIC[key]
    paths.push({
      loc,
      lastmod,
      changefreq,
      priority
    })
  })


  res.setHeader('Content-Type', 'text/xml')

  return res.send(
    template
      .replace('</urlset>', paths.reduce((a, { loc, lastmod, changefreq, priority }) => {
        if (!process.env.COMPILE) console.log('LOOP', loc, lastmod, changefreq, priority)
        return a +
          `
    <url>
      <loc>${ loc.length ? _u( CONFIG.SITE.CANONICAL, loc ) : CONFIG.SITE.CANONICAL }</loc>
      <lastmod>${ format(lastmod, 'yyyy-MM-dd') }</lastmod>
      ${ changefreq ? '<changefreq>' + changefreq  + '</changefreq>' : ''}
      <priority>${ priority }</priority>
   </url>`
      }, '')+ '</urlset>' )
  )

}


