import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import { NEW_BUNDLE_ID } from '../../constants'
import { linksWithoutAuthors } from '../../helpers'

import * as bundleActions from '../../actions/Bundle'
import Wrapper from '../BundleView/Wrapper'


const connectState = (state) => ({
  currentBundle: state.Bundle.getIn(['byId', NEW_BUNDLE_ID])
})

const connectProps = bundleActions

@connect(connectState, connectProps)
export default class BundleNewContainer extends React.Component {
  componentWillMount () {
    const { generateNewBundle } = this.props
    generateNewBundle()
  }

  saveBundle () {
    const { currentBundle, createBundle } = this.props
    const payload = {
      name: currentBundle.get('name'),
      description: currentBundle.get('description'),
      links_attributes: linksWithoutAuthors(currentBundle.get('links'))
    }

    createBundle(payload).then((bundle) => {
      const newBundleRoutePath = `/bundles/${bundle.get('id')}`

      browserHistory.push(newBundleRoutePath)
    })
  }

  render () {
    const { currentBundle, updateBundleInfo, updateBundleLink } = this.props
    if (!currentBundle) return false

    return (
      <div className='bundle-view-wrapper'>
        <Wrapper
          bundle={currentBundle}
          editMode={true}
          handleChange={updateBundleInfo}
          handleLinkEdit={updateBundleLink}
          toggleEdit={this.saveBundle.bind(this)}
        />
      </div>
    )
  }
}
