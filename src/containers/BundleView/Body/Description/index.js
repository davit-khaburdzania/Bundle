import ui from 'redux-ui'
import { Editable } from '../../../../components'

@ui()
export default class Description extends React.Component {
  render () {
    let {
      value,
      editMode,
      updateUI
    } = this.props

    return (
      <div className='bundle-editable-wrapper bundle-description'>
        <Editable
          value={value}
          placeholder='description goes here...'
          type='textarea'
          editMode={editMode}
          onChange={(value) => updateUI('description', value) }
        />
      </div>
    )
  }
}

Description.propTypes = {
  value: React.PropTypes.string,
  editMode: React.PropTypes.bool.isRequired
}
