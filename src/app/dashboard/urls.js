import { urljoin as _u } from 'utils'

const basePath = '/d/'
const accountBasePath = '/account/'
const shopBasePath = '/shop/'
const websitebasePath = '/website/'
const planBasePath = '/plan/'

export default {
  basePath,
  all                       :_u(basePath, '*'),
  HOME                      :basePath,
  WEBSITE_HOME              :_u(basePath, websitebasePath),
  SHOP_HOME                 :_u(basePath, shopBasePath),
  SHOP_DETAILS              :_u(basePath, shopBasePath, 'details'),
  SHOP_HOURS                :_u(basePath, shopBasePath, 'opening-hours'),
  SHOP_CONTACT              :_u(basePath, shopBasePath, 'contact'),
  ACCOUNT_HOME              :_u(basePath, accountBasePath),
  ACCOUNT_PROFILE           :_u(basePath, accountBasePath, 'profile'),
  ACCOUNT_GOOGLE_INTEGRATION:_u(basePath, accountBasePath, 'google'),
  PLAN_HOME                 :_u(basePath, planBasePath),
  PLAN_DETAILS              :_u(basePath, planBasePath, 'details'),
  PLAN_PAYMENT              :_u(basePath, planBasePath, 'billing'),
  PROFILE                   :_u(basePath, 'profile'),
  PROFILE2                  :_u(basePath, 'profile2')
}
