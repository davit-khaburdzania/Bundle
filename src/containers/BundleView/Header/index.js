import ImmutablePropTypes from 'react-immutable-proptypes'
import ToggleBundleButton from '../ToggleBundleButton'
import { ChangeCollection } from '../../../components'
import './index.css'

export default class BundleViewHeader extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    toggleEdit: React.PropTypes.func,
    collections: ImmutablePropTypes.map,
    updateBundle: React.PropTypes.func
  }

  render () {
    let { ui, bundle, toggleEdit, collections, updateBundle } = this.props

    if (bundle.isNewBundle) {
      return (
       <div className='bundle-view-header-wrapper'>
         <ToggleBundleButton editMode={ui.editMode} toggleEdit={toggleEdit} />
       </div>
     )
    }

    return (
      <div className='bundle-view-header-wrapper'>
        <ChangeCollection
          bundle={bundle}
          collections={collections}
          updateBundle={updateBundle}
        />

        <ToggleBundleButton editMode={ui.editMode} toggleEdit={toggleEdit} />
      </div>
    )
  }
}
