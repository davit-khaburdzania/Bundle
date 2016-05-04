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
      <Editable
        value={value}
        placeholder='description goes here...'
        editMode={editMode}
        onChange={(value) => updateUI('description', value) }
      />
    )
  }
}

Description.propTypes = {
  value: React.PropTypes.string,
  editMode: React.PropTypes.bool.isRequired
}
