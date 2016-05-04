import ui from 'redux-ui'
import listensToClickOutside from 'react-onclickoutside/decorator'
import ImmutablePropTypes from 'react-immutable-proptypes'
import ToggleBundleButton from '../ToggleBundleButton'
import { ChangeCollection } from '../../../components'
import './index.css'

@ui({
  state: { isCollectionChangeOpen: false }
})
@listensToClickOutside()
export default class BundleViewHeader extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    toggleEdit: React.PropTypes.func,
    collectionIds: ImmutablePropTypes.list,
    receivedAllCollections: React.PropTypes.bool,
    updateBundle: React.PropTypes.func
  }

  openCollectionChangeModal () {
    this.props.updateUI('isCollectionChangeOpen', true)

    if (!this.props.receivedAll) {
      this.props.getCollections()
    }
  }

  handleClickOutside (e) {
    if (this.props.ui.isCollectionChangeOpen) {
      this.props.updateUI('isCollectionChangeOpen', false)
    }
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
        <div className='change-collection-wrapper'>
          <div className='change-collection-clicker' onClick={::this.openCollectionChangeModal}>
            <span className='icon collection-icon'></span>
            <span className='collection-name'>{bundle.collection_id}</span>
            <span className='icon down-arrow-icon'></span>
          </div>

          <ChangeCollection
            bundle={bundle}
            collectionIds={collectionIds}
            updateBundle={updateBundle}
          />
        </div>

        <ToggleBundleButton editMode={ui.editMode} toggleEdit={toggleEdit} />
      </div>
    )
  }
}
