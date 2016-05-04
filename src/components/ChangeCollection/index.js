import ImmutablePropTypes from 'react-immutable-proptypes'
import listensToClickOutside from 'react-onclickoutside/decorator'
import ui from 'redux-ui'
import './index.css'
import Modal from './Modal'

@ui({
  state: { q: '', isOpen: false }
})
@listensToClickOutside()
export default class ChangeCollection extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    collectionIds: ImmutablePropTypes.list,
    updateBundle: React.PropTypes.func,
    getCollections: React.PropTypes.func,
    receivedAll: React.PropTypes.bool,
  }

  handleClickOutside (e) {
    if (this.props.ui.isOpen) {
      this.props.updateUI('isOpen', false)
    }
  }

  openModal () {
    this.props.updateUI('isOpen', true)

    if (!this.props.receivedAll) {
      this.props.getCollections()
    }
  }

  render () {
    let collectionName = this.props.bundle.collection_id || 'Add To Collection'

    return (
      <div className='change-collection-wrapper'>
        <div className='change-collection-clicker' onClick={::this.openModal}>
          <span className='icon collection-icon'></span>
          <span className='collection-name'>{collectionName}</span>
          <span className='icon down-arrow-icon'></span>
        </div>

        <Modal {...this.props} />
      </div>
    )
  }
}
