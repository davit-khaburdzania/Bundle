import { shouldShow } from '../../../../helpers'
import './index.css'

export default function BundleDescription ({
  description,
  editMode,
  handleChange
}) {
  return (
    <div className='bundle-description-wrapper'>
      <h3 style={shouldShow(!editMode)} className='bundle-description'>
        {description}
      </h3>

      <textarea style={shouldShow(editMode)} className='bundle-description-input'
        type='text' value={description} placeholder="Description goes here"
        onChange={(e) => handleChange('description', e.target.value)}
      />
    </div>
  )
}

BundleDescription.propTypes = {
  description: React.PropTypes.string,
  editMode: React.PropTypes.bool,
  handleChange: React.PropTypes.func
}
