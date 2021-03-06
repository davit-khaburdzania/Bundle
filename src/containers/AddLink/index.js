import { connect } from 'react-redux'
import { currentBundleSelector, currentUserSelector } from '../../selectors'
import { nextId } from '../../helpers'
import * as bundleActions from '../../actions/Bundle'
import * as linkActions from '../../actions/Link'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

const connectState = (state) => ({
  bundle: currentBundleSelector(state),
  currentUser: currentUserSelector(state)
})

const connectProps = {
  ...bundleActions,
  ...linkActions
}

@connect(connectState, connectProps)
export default class BundleAddLink extends React.Component {
  addLinkHandler (link) {
    let { currentUser, bundle, links, clearCurrentLink,
      updateBundle, addCurrentLinkToBundle } = this.props
    let payloadLink = link.toJS()

    payloadLink.creator_id = currentUser.id

    let payload = {
      links_attributes: [payloadLink]
    }

    if (bundle.isNewBundle) {
      let linkWithCreator = link
        .set('creator', currentUser.id)
        .set('id', nextId(links))

      return addCurrentLinkToBundle(bundle.id, linkWithCreator)
    }

    updateBundle(bundle.id, payload)
    clearCurrentLink(bundle.id)
  }

  handeUrlEnter (url) {
    this.props.fetchLink(url, this.props.bundle.id)
  }

  render () {
    const { currentUser, currentLink, bundle, fetchLink } = this.props

    if (currentLink) {
      return <LinkPreview link={currentLink} currentUser={currentUser}
               addLinkHandler={this.addLinkHandler.bind(this)}
             />
    } else {
      return <EnterUrl image={currentUser.image}
               bundleId={bundle.id}
               handeUrlEnter={this.handeUrlEnter.bind(this)}
             />
    }
  }
}
