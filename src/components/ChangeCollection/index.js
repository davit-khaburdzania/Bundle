import ImmutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
import ui from 'redux-ui'
import listensToClickOutside from 'react-onclickoutside/decorator'
import './index.css'

// @listensToClickOutside()
@ui({
  state: { q: '' }
})
export default class ChangeCollection extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    collectionIds: ImmutablePropTypes.list,
    isOpen: React.PropTypes.bool,
    closeModal: React.PropTypes.func,
    updateBundle: React.PropTypes.func,
    receivedAll: React.PropTypes.bool
  }

  handleClickOutside (e) {
    if (this.props.isOpen) this.props.closeModal()
  }

  onQuoryChange (e) {
    this.props.updateUI('q', e.target.value)
  }

  onItemClick (id) {
    let { bundle, updateBundle } = this.props
    let payload = { collection_id: id }

    if (id != bundle.collection_id) {
      updateBundle(bundle.id, payload)
    }
  }

  onCloseClick () {
    this.props.updateUI('q', '')
  }

  filteredSearch () {
    let ids = this.props.collectionIds
    let q = this.props.ui.q

    return ids.filter(id => id.includes(q))
  }

  renderItem (id, isCurrent) {
    let checkIcon = isCurrent ? <span className='icon collection-check-icon' /> : null

    if (!id) return false

    return (
      <div key={id}
        className={'item ' + (isCurrent ? 'current' : '')}
        onClick={() => this.onItemClick(id, isCurrent)}>

        <span>{id}</span>
        {checkIcon}
        <div className='separator'/>
      </div>
    )
  }

  renderSearchResult () {
    return (
      <div>
        {this.renderItem.bind(this)(this.props.bundle.collection_id, true)}
        {this.filteredSearch().map(id => this.renderItem.bind(this)(id))}
      </div>
    )
  }

  render () {
    if (!this.props.isOpen) return false

    return (
      <div className='change-collection-modal'>
        <input type='text'
          className='search-input'
          placeholder='Search Collections...'
          value={this.props.ui.q}
          onChange={this.onQuoryChange.bind(this)}
        />
        <span className='icon ion-ios-search close-icon'
          onClick={this.onCloseClick.bind(this)}
        />

        <div className='search-results'>
          {this.renderSearchResult()}
        </div>
      </div>
    )
  }
}
