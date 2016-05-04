import ImmutablePropTypes from 'react-immutable-proptypes'
import ToggleBundleButton from '../ToggleBundleButton'
import { ChangeCollection } from '../../../components'
import './index.css'

export default class BundleViewHeader extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    toggleEdit: React.PropTypes.func,
    collectionIds: ImmutablePropTypes.list,
    receivedAllCollections: React.PropTypes.bool,
    updateBundle: React.PropTypes.func
  }

  render () {
    let { ui, bundle, toggleEdit, collectionIds, updateBundle } = this.props

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
          collectionIds={collectionIds}
          updateBundle={updateBundle}
          getCollections={this.props.getCollections}
          receivedAll={this.props.receivedAllCollections}
        />

        <ToggleBundleButton editMode={ui.editMode} toggleEdit={toggleEdit} />
      </div>
    )
  }
}
