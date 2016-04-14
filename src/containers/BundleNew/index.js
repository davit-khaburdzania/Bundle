import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import { BundleNavigation } from '..'
import Wrapper from '../BundleView/Wrapper'
import { linksWithoutAuthors } from '../../helpers'

const connectState = (state) => ({
  currentBundle: state.Bundle.toJS().current
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleNewContainer extends React.Component {
  componentWillMount () {
    const { generateNewBundle } = this.props

    generateNewBundle()
  }

  saveBundle () {
    const { currentBundle, saveBundle } = this.props
    const payload = {
      name: currentBundle.name,
      description: currentBundle.description,
      links_attributes: linksWithoutAuthors(currentBundle.links)
    }

    saveBundle(payload)
  }

  render () {
    const { currentBundle, updateBundleInfo, updateBundleLink } = this.props

    if (! currentBundle) return false

    return (
      <div className='bundle-view-wrapper'>
        <Wrapper bundle={currentBundle} editMode={true}
          handleChange={updateBundleInfo}
          handleLinkEdit={updateBundleLink}
          toggleEdit={this.saveBundle.bind(this)}
        />
      </div>
    )
  }
}
