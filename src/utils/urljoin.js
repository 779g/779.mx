function urljoin(...u) {
  const s = u.filter(e => e).reduce((a, e, i) => {
    let str = e
    if (e.startsWith('/') && i > 0) {
      str = e.substring(1)
    }
    if (e.endsWith('/') && i < ( u.length - 1 )) {
      str = e.substring(0, e.length - 1)
    }


    a.push(str)
    return a
  }, [])
  return s.join('/')
}

export default urljoin
