import ImmutablePropTypes from 'react-immutable-proptypes'
import BundleName from './BundleName'
import BundleDescription from './BundleDescription'
import { BundleView } from '../../../components'
import { AddLink } from '../../'

import './index.css'

export default function BundleViewBody ({
  bundle,
  editMode,
  toggleEditMode,
  handleLinkEdit,
  handleLinkRemove,
  handleChange
}) {
  return (
    <div className='bundle-view-body'>
      <BundleName bundleId={bundle.get('id')} name={bundle.get('name')} editMode={editMode}
        handleChange={handleChange}
      />

      <BundleDescription bundleId={bundle.get('id')} description={bundle.get('description')}
        editMode={editMode} handleChange={handleChange}
      />

      <AddLink bundle={bundle} />

      <div className='line' />

      {bundle.get('links').map((link, index) =>
        <BundleView.Link key={index} index={index} link={link} editMode={editMode}
          handleLinkEdit={handleLinkEdit} handleLinkRemove={handleLinkRemove} bundleId={bundle.get('id')}
        />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: ImmutablePropTypes.map,
  editMode: React.PropTypes.bool,
  toggleEditMode: React.PropTypes.func,
  handleLinkEdit: React.PropTypes.func,
  handleLinkRemove: React.PropTypes.func,
  handleChange: React.PropTypes.func
}
