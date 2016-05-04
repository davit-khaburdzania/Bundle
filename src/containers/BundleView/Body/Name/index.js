import ui from 'redux-ui'
import { Editable } from '../../../../components'

@ui()
export default class Name extends React.Component {
  render () {
    let {
      value,
      editMode,
      updateUI
    } = this.props

    return (
      <div className='bundle-editable-wrapper bundle-name'>
        <Editable
          value={value}
          placeholder='name goes here'
          editMode={editMode}
          onChange={value => updateUI('name', value) }
        />
      </div>
    )
  }
}

Name.propTypes = {
  value: React.PropTypes.string,
  editMode: React.PropTypes.bool.isRequired
}
