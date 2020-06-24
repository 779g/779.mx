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

/*const GUIDES_CONFIG = {
  changefreq:'monthly',
  priority:.75,
  lastmod: new Date('2019-10-04')
}

const LANDING_CONFIG = {
  changefreq:'yearly',
  priority:.58,
  lastmod: new Date('2019-09-25')
}

const STATIC_MAP = {
  ABOUT: {
    changefreq:'yearly',
    priority:.5,
    lastmod: new Date('2019-10-02')
  },
  CONTACT: {
    changefreq:'never',
    priority:.5,
    lastmod: new Date('2019-09-12')
  },
  GUARANTEES: {
    changefreq:'monthly',
    priority:.7,
    lastmod: new Date('2019-09-23')

  },
  GARANZIE: {
    changefreq:'monthly',
    priority:.7,
    lastmod: new Date('2019-09-23')
  },
  PERCHE_NOI: {
    changefreq:'monthly',
    priority:.7,
    lastmod: new Date('2019-09-23')
  },
  PRIVACY:{
    changefreq:'yearly',
    priority:.1,
    lastmod: new Date('2019-09-02')
  },
  SERVICES_CAR:{
    changefreq:'monthly',
    priority:.7,
    lastmod: new Date('2019-09-23')
  },
  SERVICES_MOTO:{
    changefreq:'monthly',
    priority:.7,
    lastmod: new Date('2019-09-23')
  },
}

const query = `{
  allPosts{
		url
    ts_updated
		noindex
  }
  i {
    makes {
      slug
			car
			motorcycle
    }
    services {
      slug
			car
			motorcycle
    }
  }
  postCategories{
    slug
	}
	}

`

const QUERY_CONFIG = {
  lastmod:new Date('2019-09-20'),
  priority:.5,
}
*/

export default async (req, res) => {
  const today = new Date()

  const paths = [
  ]

  /*
  const paths = [
    {
      loc:'',
      lastmod: new Date('2019-10-02'),
      changefreq:'weekly',
      priority:1
    },
    {
      loc:U.BLOG.MAIN,
      lastmod: today,
      changefreq:'daily',
      priority:1
    },
  ]

  Object.values(U.GUIDES).forEach((loc) => {
    const { changefreq, priority, lastmod }= SITE_CONFIG
    paths.push({
      loc,
      lastmod,
      changefreq,
      priority
    })
  })

  Object.values(U.LANDING).forEach((loc) => {
    const { changefreq, priority, lastmod }= LANDING_CONFIG
    paths.push({
      loc,
      lastmod,
      changefreq,
      priority,
    })
  })
	*/

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

  /*
  const results = await request(process.env.GRAPHQL_ENDPOINT, query)
  //console.log('FETCH', results)

  results['allPosts'].forEach(({url, ts_updated, noindex}) => {
    if(!noindex) {
      const loc = [U.BLOG.MAIN, url].join('/')
      const lastmod = new Date(Number(ts_updated))
      paths.push({
        loc,
        lastmod,
        priority:.6,
      })
    }
  })

  results['postCategories'].forEach(({slug}) => {
    const loc = [U.BLOG.MAIN, U.BLOG.CATEGORY_PREFIX, slug].join('/')
    paths.push({
      loc,
      lastmod:today,
      changefreq:'daily',
      priority:.65,
    })
  })

  results['i']['makes'].forEach(({slug, car, motorcycle:moto}) => {
    const { priority, lastmod } = QUERY_CONFIG
    if(car){
      paths.push({
        loc:[U.FORM.CAR, slug].join('/'),
        lastmod,
        priority,
      })
    }
    if(moto){
      paths.push({
        loc: [U.FORM.MOTO, slug].join('/'),
        lastmod,
        priority,
      })
    }
  })

  results['i']['services'].forEach(({slug, car, motorcycle:moto}) => {
    const { priority, lastmod } = QUERY_CONFIG
    if(car){
      paths.push({
        loc:[U.FORM.CAR, slug].join('/'),
        lastmod,
        priority,
      })
    }
    if(moto){
      paths.push({
        loc: [U.FORM.MOTO, slug].join('/'),
        lastmod,
        priority,
      })
    }
  })
	*/


  res.setHeader('Content-Type', 'text/xml')

  return res.send(
    template
      .replace('</urlset>', paths.reduce((a, { loc, lastmod, changefreq, priority }) => {
        if (!process.env.COMPILE) console.log('LOOP', loc, lastmod, changefreq, priority)
        return a +
          `
    <url>
      <loc>${ loc.length ? _u( CONFIG.CANONICAL, loc ) : CONFIG.CANONICAL }</loc>
      <lastmod>${ format(lastmod, 'yyyy-MM-dd') }</lastmod>
      ${ changefreq ? '<changefreq>' + changefreq  + '</changefreq>' : ''}
      <priority>${ priority }</priority>
   </url>`
      }, '')+ '</urlset>' )
  )

}


