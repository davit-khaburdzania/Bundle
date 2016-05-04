import ImmutablePropTypes from 'react-immutable-proptypes'
import ui from 'redux-ui'
import './index.css'

export default class ChangeCollectionModal extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    collectionIds: ImmutablePropTypes.list,
    updateBundle: React.PropTypes.func,
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
