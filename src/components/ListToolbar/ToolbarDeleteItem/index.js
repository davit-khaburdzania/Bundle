export default class ToolbarDeleteItem extends React.Component {
  delete (id) {
    if (confirm('are you sure?')) {
      this.props.remove(id)
    }
  }

  render () {
    let { id } = this.props

    return (
      <div className='icon icon-toolbar-delete'
        onClick={this.delete.bind(this, id)}
      />
    )
  }
}
