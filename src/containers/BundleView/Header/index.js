import ImmutablePropTypes from 'react-immutable-proptypes'
import ToggleBundleButton from '../ToggleBundleButton'
import { ChangeCollection } from '../../../components'
import './index.css'

export default class BundleViewHeader extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    ui: React.PropTypes.object,
    toggleEdit: React.PropTypes.func,
    searchCollection: React.PropTypes.func,
    collectionIds: ImmutablePropTypes.list
  }

  render () {
    let { bundle, toggleEdit, ui, openChangeCollection } = this.props

    return (
      <div className='bundle-view-header-wrapper'>
        <div className='change-collection-wrapper'>
          <span className='icon collection-icon'></span>
          <span className='collection-name'>{bundle.collection_id}</span>
          <span className='icon down-arrow-icon' onClick={openChangeCollection}></span>

          <ChangeCollection
            collectionId={bundle.collection_id}
            isOpen={ui.changeCollectionOpen}
            closeModal={this.props.closeChangeCollection}
            searchCollection={this.props.searchCollection}
            searchResult={this.props.collectionIds}
          />
        </div>
        <ToggleBundleButton editMode={ui.editMode} toggleEdit={toggleEdit} />
      </div>
    )
  }
}
