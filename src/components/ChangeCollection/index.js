import ImmutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
import ui from 'redux-ui'
import listensToClickOutside from 'react-onclickoutside/decorator'
import './index.css'

@ui({
  state: { q: '' }
})
// @listensToClickOutside()
export default class ChangeCollection extends React.Component {
  static propTypes = {
    bundle: ImmutablePropTypes.record,
    collectionIds: ImmutablePropTypes.list,
    updateBundle: React.PropTypes.func
  }

  handleClickOutside (e) {
    if (this.props.ui.changeCollectionOpen) {
      this.props.updateUI('changeCollectionOpen', false)
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
    if (!this.props.ui.changeCollectionOpen) return false

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
