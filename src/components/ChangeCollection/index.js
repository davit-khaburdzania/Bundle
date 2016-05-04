import ImmutablePropTypes from 'react-immutable-proptypes'
import { List } from 'immutable'
import listensToClickOutside from 'react-onclickoutside/decorator'
import './index.css'

// @listensToClickOutside()
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
    // this.props.searchCollection(e.target.value)
  }

  renderSearchResult () {
    let { collectionId, collectionIds } = this.props
    let currentCollection = null

    if (collectionId) {
      currentCollection = (
        <div key={collectionId} className='item current'>
            <span>{collectionId}</span>
            <span className='icon collection-check-icon' />
            <div className='separator'/>
        </div>
      )
    }

    collectionIds = collectionIds.map(id => (
      <div key={id} className='item'>
        <span>{id}</span>
        <div className='separator'/>
      </div>
    ))

    return (
      <div>
        {currentCollection}
        {collectionIds}
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
