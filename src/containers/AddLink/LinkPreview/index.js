import ImmutablePropTypes from 'react-immutable-proptypes'
import { BundleView } from '../../../components'
import './index.css'

export default function LinkPreview ({ link, currentUser, addLinkHandler }) {
  const linkWithCreator = link
    .set('creator', currentUser.get('id'))
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
  link: ImmutablePropTypes.map.isRequired,
  currentUser: ImmutablePropTypes.map.isRequired,
  addLinkHandler: React.PropTypes.func.isRequired
}
