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
    collections: ImmutablePropTypes.map,
    updateBundle: React.PropTypes.func,
  }

  handleClickOutside (e) {
    if (this.props.ui.isOpen) {
      this.props.updateUI('isOpen', false)
    }
  }

  openModal () {
    this.props.updateUI('isOpen', true)
  }

  collectionName () {
    let { collections, bundle } = this.props
    return collections.getIn([bundle.collection_id, 'name']) || 'Add To Collection'
  }

  render () {
    return (
      <div className='change-collection-wrapper'>
        <div className='change-collection-clicker' onClick={::this.openModal}>
          <span className='icon collection-icon'></span>
          <span className='collection-name'>{::this.collectionName()}</span>
          <span className='icon down-arrow-icon'></span>
        </div>

        <Modal {...this.props} />
      </div>
    )
  }
}
