import { BundleView } from '../../../components'
import { AddLink } from '../../'
import BundleName from './BundleName'
import BundleDescription from './BundleDescription'

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
      <BundleName name={bundle.name} editMode={editMode}
        handleChange={handleChange}
      />

      <BundleDescription description={bundle.description} editMode={editMode}
        handleChange={handleChange}
      />

      <AddLink bundle={bundle} />

      <div className='line' />

      {bundle.links.map((link, index) =>
        <BundleView.Link key={index} index={index} link={link} editMode={editMode}
          handleLinkEdit={handleLinkEdit} handleLinkRemove={handleLinkRemove}
        />
      )}
    </div>
  )
}

BundleViewBody.propTypes = {
  bundle: React.PropTypes.object,
  editMode: React.PropTypes.bool,
  toggleEditMode: React.PropTypes.func,
  handleLinkEdit: React.PropTypes.func,
  handleLinkRemove: React.PropTypes.func,
  handleChange: React.PropTypes.func
}
