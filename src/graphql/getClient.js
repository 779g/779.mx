import {
  ApolloClient,
  ApolloLink,
  createHttpLink
} from '@apollo/client'
import { RetryLink } from '@apollo/link-retry'
import { InMemoryCache } from '@apollo/client/cache'
//import { setContext } from 'apollo-link-context'

function getLink(endpoint) {
  const httpLink = createHttpLink({ uri: endpoint })
  const retryLink = new RetryLink({
    delay:{
      initial:10000,
      max    :2000,
      jitter :true
    },
    attempts:{
      max    :2,
      retryIf:(error, _operation) => !!error
    }
  })
  const link = ApolloLink.from([
    retryLink,
    httpLink
  ])
  return link
}

function getClient(endpoint){
  const Link = getLink(endpoint)
  const c = new ApolloClient({
    link :Link,
    cache:new InMemoryCache().restore(window.__APOLLO_STATE__)
  })
  return c
}

export { getClient }


