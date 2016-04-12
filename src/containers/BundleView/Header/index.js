import ToggleBundleButton from '../ToggleBundleButton'

export default function BundleViewHeader ({ toggleEdit, editMode }) {
  return (
    <div className='bundle-view-header-wrapper'>
      {/*<ToggleBundleButton editMode={editMode} toggleEdit={toggleEdit} />*/}
    </div>
  )
}

BundleViewHeader.propTypes = {
  editMode: React.PropTypes.bool,
  toggleEdit: React.PropTypes.func
}
