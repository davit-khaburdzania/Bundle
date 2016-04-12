import { connect } from 'react-redux'
import * as bundleActions from '../../actions/Bundle'
import { BundleNavigation } from '..'
import Wrapper from '../BundleView/Wrapper'

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
  render () {
    const { currentBundle } = this.props
    if (! currentBundle) return false
    return (
      <div className='bundle-view-wrapper'>
        <Wrapper bundle={currentBundle} editMode={true}/>
      </div>
    )
  }
}
