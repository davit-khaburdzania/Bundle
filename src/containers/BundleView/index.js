import * as bundleActions from '../../actions/Bundle'
import * as linkActions from '../../actions/Link'

import { connect } from 'react-redux'
import { currentBundleSelector, currentLinkSelector } from '../../selectors'
import { linksWithoutAuthors } from '../../helpers'

import Wrapper from './Wrapper'
import ui from 'redux-ui'

const connectState = (state) => ({
  bundle: currentBundleSelector(state),
  users: state.User.get('byId'),
  links: state.Link.get('byId'),
  currentLink: currentLinkSelector(state),
  bundleId: state.Route.bundleId
})

const connectProps = {
  ...bundleActions,
  ...linkActions
}

@ui({
  key: 'bundle',
  state: {
    editMode: false
  }
})
@connect(connectState, connectProps)
export default class BundleViewContainer extends React.Component {
  componentWillMount () {
    const { getBundle, bundleId } = this.props
    if (bundleId) getBundle(bundleId)
  }

  componentWillReceiveProps (nextProps) {
    const { getBundle, bundleId, resetUI } = this.props
    const nextBundleId = nextProps.bundleId

    if (bundleId !== nextBundleId) {
      resetUI()
      getBundle(nextBundleId)
    }
  }

  handleLinkRemove (index) {
    const { bundle, updateBundle } = this.props
    const linkId = bundle.getIn(['links', index])

    const payload = {
      links_attributes: [{id: linkId, _destroy: true }]
    }

    updateBundle(bundle.id, payload)
  }

  toggleEdit (save) {
    let { toggleEditMode, bundle, links, updateBundle, updateUI, ui } = this.props
    let bundleLinks = bundle.links.map(id => links.get(id))

    if (!save) return updateUI('editMode', !ui.editMode)

    const payload = {
      name: bundle.name,
      description: bundle.description,
      links_attributes: linksWithoutAuthors(bundleLinks)
    }

    updateBundle(bundle.id, payload)
    updateUI('editMode', !ui.editMode)
  }

  render () {
    let {
      ui,
      bundle,
      links,
      users,
      currentLink,
      updateBundleInfo,
      updateLink
    } = this.props

    if (!bundle || !bundle.full_response) {
      return false
    }

    return <Wrapper editMode={ui.editMode}
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
