import ImmutablePropTypes from 'react-immutable-proptypes'
import BundleName from './BundleName'
import BundleDescription from './BundleDescription'
import { BundleView } from '../../../components'
import { AddLink } from '../../'

import './index.css'

export default function BundleViewBody ({
  bundle,
  users,
  links,
  currentLink,
  editMode,
  toggleEditMode,
  handleLinkEdit,
  handleLinkRemove,
  handleChange
}) {
  return (
    <div className='bundle-view-body'>
      <BundleName
        bundleId={bundle.id}
        name={bundle.name}
        editMode={editMode}
        handleChange={handleChange}
      />

      <BundleDescription
        bundleId={bundle.id}
        description={bundle.description}
        editMode={editMode}
        handleChange={handleChange}
      />

      <AddLink bundle={bundle} currentLink={currentLink} links={links} />

      <div className='line' />

      {bundle.get('links').map((id, index) =>
        <BundleView.Link
          key={index}
          index={index}
          link={links.get(id)}
          creator={users.get(links.getIn([id, 'creator']))}
          editMode={editMode}
          handleLinkEdit={handleLinkEdit}
          handleLinkRemove={handleLinkRemove}
        />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: ImmutablePropTypes.record,
  users: ImmutablePropTypes.map,
  links: ImmutablePropTypes.map,
  currentLink: ImmutablePropTypes.record,
  editMode: React.PropTypes.bool,
  toggleEditMode: React.PropTypes.func,
  handleLinkEdit: React.PropTypes.func,
  handleLinkRemove: React.PropTypes.func,
  handleChange: React.PropTypes.func
}
