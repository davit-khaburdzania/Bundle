import { BundleView } from '../../../components'
import './index.css'

export default function LinkPreview ({
  link,
  currentUser,
  addLinkHandler
}) {
  const linkWithCreator = {
    ...link,
    creator: currentUser,
    created_at: link.created_at || new Date().toISOString()
  }

  return (
    <div className='add-link-preview'>
      <BundleView.Link link={linkWithCreator} />

      <button className='add-link-button'
        onClick={addLinkHandler.bind(this, link)}>Add Link
      </button>
    </div>
  )
}

LinkPreview.propTypes = {
  link: React.PropTypes.object.isRequired,
  currentUser: React.PropTypes.object.isRequired,
  addLinkHandler: React.PropTypes.func.isRequired
}
