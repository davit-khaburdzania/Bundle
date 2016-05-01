export function urlDomain (str) {
  const url = document.createElement('a')

  url.href = str
  return url.hostname
}

export function shouldShow (show) {
  return { 'display': show ? 'block' : 'none' }
}

export function linksWithoutAuthors (links) {
  return links.map(link => link.delete('creator'))
}

export function nextId (items) {
  let max = items.keySeq().filter(id => id < 0).max() || 0
  return (max - 1).toString()
}
