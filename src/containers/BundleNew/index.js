import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import * as bundleActions from '../../actions/Bundle'

import Wrapper from '../BundleView/Wrapper'
import { BundleNavigation } from '..'

import { linksWithoutAuthors } from '../../helpers'
import api from '../../api'


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

    saveBundle(payload).then((bundle) => {
      const newBundleRoutePath = '/bundles/' + bundle.slug

      browserHistory.push(newBundleRoutePath)
    })
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
