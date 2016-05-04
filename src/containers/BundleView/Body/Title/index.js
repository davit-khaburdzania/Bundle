import ui from 'redux-ui'
import { Editable } from '../../../../components'

@ui({
  key: 'bundleNew',
  state: {
    title: null,
  }
})
export default class Title extends React.Component {
  render () {
    let {
      value,
      editMode,
      updateUI
    } = this.props

    return (
      <Editable
        value={value}
        placeholder="title goes here"
        editMode={editMode}
        onChange={(value) => updateUI('title', value) }
      />
    )
  }
}

Title.propTypes = {
  value: React.PropTypes.string,
  editMode: React.PropTypes.bool.isRequired
}
