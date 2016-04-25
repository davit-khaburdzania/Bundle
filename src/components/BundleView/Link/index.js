import Date from '../../Date'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { urlDomain, shouldShow } from '../../../helpers'

import './index.css'

export default class BundleLink extends React.Component {
  handleEdit (link, field, event) {
    const { handleLinkEdit } = this.props
    const value = event.target.value

    handleLinkEdit(link.get('id'), field, value)
  }

  handleRemoveClick (event) {
    const { index, handleLinkRemove } = this.props

    handleLinkRemove(index)
  }

  render () {
    const { link, creator, editMode } = this.props

    return (
      <div className='bundle-view-link'>
        <button style={shouldShow(editMode)}
          onClick={this.handleRemoveClick.bind(this)}
          className='btn mod-remove-link-btn'
        >
          remove
        </button>

        <div className='link-creator'>
          <img className='creator-image' src={creator.get('image')} />
          <span className='creator-name'>{creator.get('name')}</span>
          <span className='shared-this'>shared this</span>
        </div>
        <div className='link-description'>
          <div style={shouldShow(!editMode)}>{link.get('description')}</div>

          <input style={shouldShow(editMode)} type='text'
            value={link.get('description')} className='link-description-input'
            onChange={this.handleEdit.bind(this, link, 'description')}
          />
        </div>

        <div className='link-body'>
          <div className='link-image-wrapper'>
            <img className='link-image' src={link.get('image')} />
          </div>
          <div className='link-details-wrapper'>
            <div className='link-title u-truncate-text'>
              <a href={link.get('url')} target='_blank'>
                <span style={shouldShow(!editMode)}
                  className='link-title u-truncate-text'>{link.get('title')}
                </span>
              </a>

              <input style={shouldShow(editMode)} type='text'
                value={link.get('title')} className='link-title-input'
                onChange={this.handleEdit.bind(this, link, 'title')}
              />
            </div>
            <div className='link-details-sub-wrapper'>
              <span className='link-domain'>On {urlDomain(link.get('url'))}</span>
              <span className='dot-symbol'>•</span>
              <span className='link-created'>
                <Date type='fromNow'>{link.get('created_at')}</Date>
              </span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

BundleLink.propTypes = {
  index: React.PropTypes.number,
  handleLinkRemove: React.PropTypes.func,
  link: ImmutablePropTypes.map,
  creator: ImmutablePropTypes.map,
  editMode: React.PropTypes.bool,
  handleLinkEdit: React.PropTypes.func
}
