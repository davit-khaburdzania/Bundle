import ImmutablePropTypes from 'react-immutable-proptypes'
import BundleViewHeader from '../Header'
import BundleViewBody from '../Body'

import './index.css'

export default function BundleView ({
  bundle,
  users,
  links,
  currentLink,
  editMode,
  handleLinkEdit,
  handleChange,
  handleLinkRemove,
  toggleEdit
}) {
  return (
    <div className='bundle-view-wrapper'>
      <BundleViewHeader
        toggleEdit={toggleEdit}
        editMode={editMode}
      />

      <BundleViewBody
        editMode={editMode}
        handleLinkEdit={handleLinkEdit}
        bundle={bundle}
        links={links}
        users={users}
        currentLink={currentLink}
        handleChange={handleChange}
        handleLinkRemove={handleLinkRemove}
      />
    </div>
  )
}

BundleView.propTypes = {
  bundle: ImmutablePropTypes.record,
  users: ImmutablePropTypes.map,
  links: ImmutablePropTypes.map,
  currentLink: ImmutablePropTypes.record,
  editMode: React.PropTypes.bool,
  handleLinkEdit: React.PropTypes.func,
  handleLinkRemove: React.PropTypes.func,
  handleChange: React.PropTypes.func
}
