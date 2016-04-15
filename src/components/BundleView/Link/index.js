import Date from '../../Date'
import { urlDomain, shouldShow } from '../../../helpers'
import './index.css'

export default class BundleLink extends React.Component {
  handleEdit (link, field, event) {
    const { handleLinkEdit } = this.props
    const value = event.target.value

    handleLinkEdit(link.id, field, value)
  }

  handleRemoveClick (event) {
    const { index, handleLinkRemove } = this.props

    handleLinkRemove(index)
  }

  render () {
    const { link, editMode } = this.props

    return (
      <div className='bundle-view-link'>
        <button style={shouldShow(editMode)}
          onClick={this.handleRemoveClick.bind(this)}
          className='btn mod-remove-link-btn'
        >
          remove
        </button>

        <div className='link-creator'>
          <img className='creator-image' src={link.creator.image} />
          <span className='creator-name'>{link.creator.name}</span>
          <span className='shared-this'>shared this</span>
        </div>
        <div className='link-description'>
          <div style={shouldShow(!editMode)}>{link.description}</div>

          <input style={shouldShow(editMode)} type='text'
            value={link.description} className='link-description-input'
            onChange={this.handleEdit.bind(this, link, 'description')}
          />
        </div>

        <div className='link-body'>
          <div className='link-image-wrapper'>
            <img className='link-image' src={link.image} />
          </div>
          <div className='link-details-wrapper'>
            <div className='link-title u-truncate-text'>
              <a href={link.url} target='_blank'>
                <span style={shouldShow(!editMode)}
                  className='link-title u-truncate-text'>{link.title}
                </span>
              </a>

              <input style={shouldShow(editMode)} type='text'
                value={link.title} className='link-title-input'
                onChange={this.handleEdit.bind(this, link, 'title')}
              />
            </div>
            <div className='link-details-sub-wrapper'>
              <span className='link-domain'>On {urlDomain(link.url)}</span>
              <span className='dot-symbol'>•</span>
              <span className='link-created'>
                <Date type='fromNow'>{link.created_at}</Date>
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
  link: React.PropTypes.object.isRequired,
  editMode: React.PropTypes.bool,
  handleLinkEdit: React.PropTypes.func
}
