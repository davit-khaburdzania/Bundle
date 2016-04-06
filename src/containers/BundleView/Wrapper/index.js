import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView ({
  bundle,
  editMode,
  handleLinkEdit,
  handleChange,
  handleLinkRemove,
  toggleEdit
}) {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader toggleEdit={toggleEdit} editMode={editMode} />

      <BundleViewBody editMode={editMode} handleLinkEdit={handleLinkEdit}
        bundle={bundle} handleChange={handleChange}
        handleLinkRemove={handleLinkRemove}
      />
    </div>
  )
}

BundleView.propTypes = {
  bundle: React.PropTypes.object.isRequired,
  editMode: React.PropTypes.bool,
  handleLinkEdit: React.PropTypes.func.isRequired,
  handleLinkRemove: React.PropTypes.func.isRequired,
  handleChange: React.PropTypes.func.isRequired
}
