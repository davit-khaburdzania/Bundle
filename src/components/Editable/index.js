import ui from 'redux-ui'

@ui()
class Editable extends React.Component {
  handleKeyUp({ key, target }) {
    let { enterAction, onChange } = this.props

    if (onChange) {
      onChange(target.value)
    } else if (enterAction && key === 'Enter') {
      enterAction(target.value)
    }
  }

  render () {
    let { value, placeholder, editMode } = this.props

    if (editMode) {
      return <input
        defaultValue={value || ''}
        placeholder={placeholder}
        onKeyUp={this.handleKeyUp.bind(this)}
      />
    } else {
      return <span>{value}</span>
    }
  }

  static propTypes = {
    value: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    editMode: React.PropTypes.bool.isRequired,
    enterAction: React.PropTypes.func,
    onChange: React.PropTypes.func
  }
}

export default Editable
