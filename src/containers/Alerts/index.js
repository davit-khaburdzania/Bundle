import { connect } from 'react-redux'
import { Alert } from '../../components'
import * as alertActions from '../../actions/Alert'

const connectProps = (state) => ({ alert: state.Alert[0] })
const connectActions = { ...alertActions }

@connect(connectProps, connectActions)
export default class Alerts extends React.Component {
  render () {
    let { alert, removeAlert } = this.props
    if (!alert) return false

    return (
      <Alert.Wrapper>
        <Alert type={alert.type}
          alerts={alert.list}
          removeAlert={removeAlert}
        />
      </Alert.Wrapper>
    )
  }

  static propTypes = {
    alert: React.PropTypes.object
  }
}
