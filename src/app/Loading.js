import React, { useEffect } from 'react'

export default function Loading() {

  /*
  useEffect(() => {
    const pl =  document.getElementById('pl')
    pl.className=''
    return () => {
      pl.classList.add('ld')
      //console.log('unmounting', pl)
    }
  }, [])
  return null
  */
  return <h1>A module is loading</h1>
}
