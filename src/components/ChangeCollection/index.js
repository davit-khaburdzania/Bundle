import ImmutablePropTypes from 'react-immutable-proptypes'
import listensToClickOutside from 'react-onclickoutside/decorator'
import './index.css'

@listensToClickOutside()
export default class ChangeCollection extends React.Component {
  static propTypes = {
    collectionId: React.PropTypes.string,
    isOpen: React.PropTypes.bool,
    closeModal: React.PropTypes.func
  }

  handleClickOutside (e) {
    if (this.props.isOpen) {
      e.preventDefault()
      e.stopPropagation()
      this.props.closeModal()
    }
  }

  render () {
    let { isOpen } = this.props

    if (!isOpen) return false

    return <div>viri</div>
  }
}
