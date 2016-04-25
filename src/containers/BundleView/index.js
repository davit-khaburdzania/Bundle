import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import * as linkActions from '../../actions/Link'
import Wrapper from './Wrapper'
import { linksWithoutAuthors } from '../../helpers'

const connectState = (state) => ({
  bundle: state.Bundle.getIn(['byId', state.Route.getIn(['bundle', 'id'])]),
  users: state.User.get('byId'),
  links: state.Link.get('byId'),
  currentLink: state.Link.getIn(['current', state.Route.getIn(['bundle', 'id'])]),
  bundleId: state.Route.getIn(['bundle', 'id'])
})

const connectProps = {
  ...bundleActions,
  ...linkActions
}

@connect(connectState, connectProps)
export default class BundleViewContainer extends React.Component {
  componentWillMount () {
    const { getBundle, bundleId } = this.props
    if (bundleId) getBundle(bundleId)
  }

  componentWillReceiveProps (nextProps) {
    const { getBundle, bundleId } = this.props
    const nextBundleId = nextProps.bundleId

    if (bundleId !== nextBundleId) getBundle(nextBundleId)
  }

  handleLinkRemove (index) {
    const { bundle, updateBundle } = this.props
    const linkId = bundle.getIn(['links', index])

    const payload = {
      links_attributes: [{id: linkId, _destroy: true }]
    }

    updateBundle(bundle.get('id'), payload)
  }

  toggleEdit (save) {
    let { toggleEditMode, bundle, links, updateBundle } = this.props
    let bundleLinks = bundle.get('links').map(id => links.get(id))

    if (!save) return toggleEditMode(bundle.get('id'))

    const payload = {
      name: bundle.get('name'),
      description: bundle.get('description'),
      links_attributes: linksWithoutAuthors(bundleLinks)
    }

    updateBundle(bundle.get('id'), payload)
    toggleEditMode(bundle.get('id'))
  }

  render () {
    let {
      bundle,
      links,
      users,
      currentLink,
      updateBundleInfo,
      updateLink
    } = this.props

    if (!bundle || !bundle.get('full_response')) {
      return false
    }

    return <Wrapper editMode={bundle.get('editMode')}
      bundle={bundle}
      links={links}
      users={users}
      currentLink={currentLink}
      handleChange={updateBundleInfo}
      handleLinkEdit={updateLink}
      handleLinkRemove={this.handleLinkRemove.bind(this)}
      toggleEdit={this.toggleEdit.bind(this)}
    />
  }
}
