import ImmutablePropTypes from 'react-immutable-proptypes'
import { BundleView } from '../../../components'
import './index.css'

export default function LinkPreview ({ link, currentUser, addLinkHandler }) {
  const linkWithCreator = link
    .set('creator', currentUser.id)
    .set('created_at', link.created_at || new Date().toISOString())

  return (
    <div className='add-link-preview'>
      <BundleView.Link link={linkWithCreator} creator={currentUser} />

      <button className='add-link-button'
        onClick={addLinkHandler.bind(this, link)}>Add Link
      </button>
    </div>
  )
}

LinkPreview.propTypes = {
  link: ImmutablePropTypes.record.isRequired,
  currentUser: ImmutablePropTypes.record.isRequired,
  addLinkHandler: React.PropTypes.func.isRequired
}
