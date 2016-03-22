export function urlDomain (str) {
  const url = document.createElement('a')

  url.href = str
  return url.hostname
}

export function shouldShow (show) {
  return { 'display': show ? 'block' : 'none' }
}
