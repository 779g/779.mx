function urljoin(...u) {
  let first,last
  if (u[-1] != '*' || u[-1].endsWith('/')) last = '/'
  else last = ''
  if (u[0].startsWith('http') || u[0].startsWith('/')) first = ''
  else first = '/'
  return first + u.join('/') + last
}

export default urljoin
