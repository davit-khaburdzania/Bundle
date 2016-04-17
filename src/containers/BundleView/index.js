import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import Wrapper from './Wrapper'
import { linksWithoutAuthors } from '../../helpers'

const connectState = (state) => ({
  bundle: state.Bundle.get('current'),
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
    const linkId = bundle.getIn(['links', index, 'id'])

    const payload = {
      links_attributes: [{id: linkId, _destroy: true }]
    }

    updateBundle(bundle.get('id'), payload)
  }

  toggleEdit (save) {
    const { toggleEditMode, bundle, updateBundle } = this.props

    if (!save) return toggleEditMode()

    const payload = {
      name: bundle.get('name'),
      description: bundle.get('description'),
      links_attributes: linksWithoutAuthors(bundle.get('links'))
    }

    updateBundle(bundle.get('id'), payload)
    toggleEditMode()
  }

  render () {
    const { bundle, updateBundleInfo, updateBundleLink } = this.props

    if (!bundle) {
      return <div>Select Bundle</div>
    }

    return <Wrapper editMode={bundle.get('editMode')} bundle={bundle}
      handleChange={updateBundleInfo}
      handleLinkEdit={updateBundleLink}
      handleLinkRemove={this.handleLinkRemove.bind(this)}
      toggleEdit={this.toggleEdit.bind(this)} />
  }
}
