import ImmutablePropTypes from 'react-immutable-proptypes'
import ui from 'redux-ui'
import './index.css'

export default class ChangeCollectionModal extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    collections: ImmutablePropTypes.map,
    updateBundle: React.PropTypes.func,
  }

  onQuoryChange (e) {
    this.props.updateUI('q', e.target.value)
  }

  onItemClick (collection) {
    let { bundle, updateBundle } = this.props
    let payload = { collection_id: collection.id }

    if (collection.id != bundle.collection_id) {
      updateBundle(bundle.id, payload)
    }
  }

  onCloseClick () {
    this.props.updateUI('q', '')
  }

  currentCollection () {
    return this.props.collections.get(this.props.bundle.collection_id)
  }


  currentCollectionId () {
    return this.props.collections.getIn([this.props.bundle.collection_id, 'id'])
  }

  filteredCollections () {
    let collections = this.props.collections.valueSeq()
    let q = this.props.ui.q.toLowerCase()
    let currentId = this.currentCollectionId()

    return collections.filter(item => {
      return item.id != currentId && item.name.toLowerCase().includes(q)
    })
  }

  renderItem (item, isCurrent) {
    let checkIcon = isCurrent ? <span className='icon collection-check-icon' /> : null

    if (!item) return false

    return (
      <div key={item.id}
        className={'item ' + (isCurrent ? 'current' : '')}
        onClick={() => this.onItemClick(item)}>

        <span>{item.name}</span>
        {checkIcon}
        <div className='separator'/>
      </div>
    )
  }

  renderSearchResult () {
    return (
      <div>
        {::this.renderItem(::this.currentCollection(), true)}
        {this.filteredCollections().map(item => ::this.renderItem(item))}
      </div>
    )
  }

  render () {
    if (!this.props.ui.isOpen) return false

    return (
      <div className='change-collection-modal'>
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
    )
  }
}
