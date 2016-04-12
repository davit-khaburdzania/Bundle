import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import Wrapper from './Wrapper'
import { linksWithoutAuthors } from '../../helpers'

const connectState = (state) => ({
  bundle: state.Bundle.toJS().current,
  bundleId: state.Route.getIn(['bundle', 'id'])
})

const connectProps = bundleActions

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
    const linkId = bundle.links[index].id

    const payload = {
      links_attributes: [{id: linkId, _destroy: true }]
    }

    updateBundle(bundle.id, payload)
  }

  toggleEdit (save) {
    const { toggleEditMode, bundle, updateBundle } = this.props

    if (!save) return toggleEditMode()

    const payload = {
      name: bundle.name,
      description: bundle.description,
      links_attributes: linksWithoutAuthors(bundle.links)
    }

    updateBundle(bundle.id, payload)
    toggleEditMode()
  }

  render () {
    const { bundle, updateBundleInfo, updateBundleLink } = this.props

    if (!bundle) {
      return <div>Select Bundle</div>
    }

    return <Wrapper editMode={bundle.editMode} bundle={bundle}
      handleChange={updateBundleInfo}
      handleLinkEdit={updateBundleLink}
      handleLinkRemove={this.handleLinkRemove.bind(this)}
      toggleEdit={this.toggleEdit.bind(this)} />
  }
}
