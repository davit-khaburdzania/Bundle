import { shouldShow } from '../../../../helpers'
import './index.css'

export default function BundleName ({ name, editMode, handleChange }) {
  return (
    <div className='bundle-name-wrapper'>
      <h2 style={shouldShow(!editMode)} className='bundle-name'>{name}</h2>

      <input style={shouldShow(editMode)} className='bundle-name-input'
        type='text' value={name} placeholder='Title goes here'
        onChange={(e) => handleChange('name', e.target.value)}
      />
    </div>
  )
}

BundleName.propTypes = {
  name: React.PropTypes.string,
  editMode: React.PropTypes.bool,
  handleChange: React.PropTypes.func
}
