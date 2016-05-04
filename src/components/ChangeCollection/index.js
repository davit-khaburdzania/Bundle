import ImmutablePropTypes from 'react-immutable-proptypes'
import listensToClickOutside from 'react-onclickoutside/decorator'
import { List } from 'immutable'
import ui from 'redux-ui'
import './index.css'

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

  openModal () {
    this.props.updateUI('isOpen', true)

    if (!this.props.receivedAll) {
      this.props.getCollections()
    }
  }

  filteredSearch () {
    let ids = this.props.collectionIds
    let q = this.props.ui.q
    let current = this.props.bundle.collection_id

    return ids.filter(id => id != current && id.includes(q))
  }

  renderItem (id, isCurrent) {
    let checkIcon = isCurrent ? <span className='icon collection-check-icon' /> : null

    if (!id) return false

    return (
      <div key={id}
        className={'item ' + (isCurrent ? 'current' : '')}
        onClick={() => this.onItemClick(id)}>

        <span>{id}</span>
        {checkIcon}
        <div className='separator'/>
      </div>
    )
  }

  renderSearchResult () {
    return (
      <div>
        {::this.renderItem(this.props.bundle.collection_id, true)}
        {this.filteredSearch().map(id => ::this.renderItem(id))}
      </div>
    )
  }

  renderModal () {
    if (!this.props.ui.isOpen) return false

    return <div className='change-collection-modal'>
      <input type='text'
        className='search-input'
        placeholder='Search Collections...'
        value={this.props.ui.q}
        onChange={::this.onQuoryChange}
      />
      <span className='icon ion-ios-search close-icon'
        onClick={::this.onCloseClick}
      />
      <div className='search-results'>
        {this.renderSearchResult()}
      </div>
    </div>
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

        {::this.renderModal()}
      </div>
    )
  }
}
