function urlDomain(str) {
  const url = document.createElement('a')

  url.href = str
  return url.hostname
}

function shouldShow (show) {
  return { 'display': show ? 'block' : 'none' }
}

export {
  urlDomain,
  shouldShow
}
