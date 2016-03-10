import moment from 'moment'

function urlDomain(str) {
  const url = document.createElement('a')
        url.href = str
  return url.hostname
}

function timeAgo(time) {
  return moment(time).fromNow()
}

export {
  urlDomain,
  timeAgo
}
