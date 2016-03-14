function urlDomain(str) {
  const url = document.createElement('a')
        url.href = str
  return url.hostname
}

export {
  urlDomain
}
