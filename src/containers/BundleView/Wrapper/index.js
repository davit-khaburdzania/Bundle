import ImmutablePropTypes from 'react-immutable-proptypes'
import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView ({
  bundle,
  links,
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
        bundle={bundle} links={links} handleChange={handleChange}
        handleLinkRemove={handleLinkRemove}
      />
    </div>
  )
}

BundleView.propTypes = {
  bundle: ImmutablePropTypes.map,
  links: ImmutablePropTypes.map,
  editMode: React.PropTypes.bool,
  handleLinkEdit: React.PropTypes.func,
  handleLinkRemove: React.PropTypes.func,
  handleChange: React.PropTypes.func
}
