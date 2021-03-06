import * as bundleActions from '../../actions/Bundle'
import * as linkActions from '../../actions/Link'
import * as searchActions from '../../actions/Search'
import * as collectionActions from '../../actions/Collection'

import { connect } from 'react-redux'
import { linksWithoutAuthors } from '../../helpers'
import {
  currentBundleSelector,
  currentLinkSelector
} from '../../selectors'

import Wrapper from './Wrapper'
import ui from 'redux-ui'

const connectState = (state) => ({
  bundle: currentBundleSelector(state),
  users: state.User.get('byId'),
  links: state.Link.get('byId'),
  currentLink: currentLinkSelector(state),
  bundleId: state.Route.bundleId,
  collections: state.Collection.get('byId'),
  receivedAllCollections: state.Collection.get('receivedAll')
})

const connectProps = {
  ...bundleActions,
  ...collectionActions,
  ...linkActions,
  ...searchActions
}

@ui({
  key: 'bundle',
  state: {
    editMode: false,
    name: '',
    description: ''
  }
})
@connect(connectState, connectProps)
export default class BundleViewContainer extends React.Component {
  componentWillMount () {
    const { getBundle, bundleId } = this.props

    if (bundleId) getBundle(bundleId)

    if (!this.props.receivedAllCollections) {
      this.props.getCollections()
    }
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
      name: ui.name,
      description: ui.description,
      links_attributes: linksWithoutAuthors(bundleLinks)
    }

    updateBundle(bundle.id, payload)
    updateUI('editMode', !ui.editMode)
  }

  render () {
    let { bundle, updateBundleInfo, updateLink} = this.props

    if (!bundle || !bundle.full_response) {
      return false
    }

    return <Wrapper {...this.props}
      handleChange={updateBundleInfo}
      handleLinkEdit={updateLink}
      handleLinkRemove={::this.handleLinkRemove}
      toggleEdit={::this.toggleEdit}
    />
  }
}
