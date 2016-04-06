export default class Editable extends React.Component {
  handleEnter ({ key, target }) {
    let { enterAction } = this.props

    if (key === 'Enter') {
      enterAction(target.value)
    }
  }

  render () {
    let { value, editMode } = this.props

    if (editMode) {
      return <input defaultValue={value} onKeyUp={this.handleEnter.bind(this)} />
    } else {
      return <span>{value}</span>
    }
  }

  static propTypes = {
    value: React.PropTypes.string.isRequired,
    editMode: React.PropTypes.bool,
    enterAction: React.PropTypes.func.isRequired
  }
}
