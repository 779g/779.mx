import React from 'react'
import baseLoadable from '@loadable/component'
import Loading from 'app/Loading'

export default function loadable(func) {
  return baseLoadable(func, { fallback: <Loading /> })
}
