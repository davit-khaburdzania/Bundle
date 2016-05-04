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
    collectionId: React.PropTypes.string,
    collectionIds: ImmutablePropTypes.list,
    isOpen: React.PropTypes.bool,
    closeModal: React.PropTypes.func,
    receivedAll: React.PropTypes.bool
  }

  handleClickOutside (e) {
    if (this.props.isOpen) this.props.closeModal()
  }

  onChange(e) {
    this.props.updateUI('q', e.target.value)
  }

  filteredSearch () {
    let ids = this.props.collectionIds
    let q = this.props.ui.q

    return ids.filter(id => id.includes(q))
  }

  renderItem (id, current) {
    let checkIcon = current ? <span className='icon collection-check-icon' /> : null

    if (!id) return false

    return (
      <div key={id} className={'item ' + (current ? 'current' : '')}>
        <span>{id}</span>
        {checkIcon}
        <div className='separator'/>
      </div>
    )
  }

  renderSearchResult () {
    return (
      <div>
        {this.renderItem(this.props.collectionId, true)}
        {this.filteredSearch().map(id => this.renderItem(id))}
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
          onChange={this.onChange.bind(this)}
        />
        <span className='icon ion-ios-search close-icon' />

        <div className='search-results'>
          {this.renderSearchResult()}
        </div>
      </div>
    )
  }
}
