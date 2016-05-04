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
    let { bundle, toggleEdit } = this.props
    return (
      <div className='bundle-view-header-wrapper'>
        <div className='change-collection-wrapper'>
          <span className='icon collection-icon'></span>
          <span className='collection-name'>{bundle.collection_id}</span>
          <span className='icon down-arrow-icon' onClick={::this.openCollectionChangeModal} />

          <ChangeCollection
            bundle={bundle}
            collectionIds={this.props.collectionIds}
            updateBundle={this.props.updateBundle}
          />
        </div>
        <ToggleBundleButton editMode={ui.editMode} toggleEdit={toggleEdit} />
      </div>
    )
  }
}
