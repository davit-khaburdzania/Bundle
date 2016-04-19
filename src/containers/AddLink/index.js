import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import EnterUrl from './EnterUrl'
import LinkPreview from './LinkPreview'

const connectState = (state) => ({
  bundle: state.Bundle.getIn(['byId', state.Route.getIn(['bundle', 'id'])]),
  currentUser: state.User.get('me')
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleAddLink extends React.Component {
  addLinkHandler (link) {
    const { currentUser, bundle,
      updateBundle, addCurrentLinkToLink } = this.props

    const payload = {
      links_attributes: [link.set('creator_id', currentUser.get('id')).toJS()]
    }

    if (bundle.get('isNewBundle')) {
      let linkWithCreator = link.set('creator', currentUser)
      return addCurrentLinkToLink(bundle.get('id'), linkWithCreator)
    }

    updateBundle(bundle.get('id'), payload)
  }

  handeUrlEnter (url) {
    this.props.fetchLink(url, this.props.bundle.get('id'))
  }

  render () {
    const { currentUser, bundle, fetchLink } = this.props
    const link = bundle.get('link')

    if (link) {
      return <LinkPreview link={link} currentUser={currentUser}
               addLinkHandler={this.addLinkHandler.bind(this)}
             />
    } else {
      return <EnterUrl image={currentUser.get('image')}
               bundleId={bundle.get('id')}
               handeUrlEnter={this.handeUrlEnter.bind(this)}
             />
    }
  }
}
