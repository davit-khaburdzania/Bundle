import './index.css'

export default class Menu extends React.Component {
  renderHeadline (headline) {
    if (headline) {
      return (
        <div className='headline'>
          <span>{headline}</span>
          <hr />
        </div>
      )
    }
  }

  render () {
    let { headline, children, left, bottom } = this.props
    let styles = { left, bottom }

    return (
      <div style={styles} className='menu'>
        {this.renderHeadline(headline)}

        {children}
      </div>
    )
  }

  static propTypes = {
    left: React.PropTypes.string,
    bottom: React.PropTypes.string,
    headline: React.PropTypes.string
  }
}
