import './index.css'

function handleKeyPress (bundleId, handeUrlEnter, event) {
  const url = event.target.value
  if (event.key === 'Enter') handeUrlEnter(url, bundleId)
}

export default function EnterUrl ({
  image,
  handeUrlEnter,
  bundleId
}) {
  return (
    <div className='add-link-enter-url'>
      <img className='creator-image' src={image} />
      <input className='url-input' placeholder='Enter Url Here...'
        onKeyPress={handleKeyPress.bind(this, bundleId, handeUrlEnter)}
      />
    </div>
  )
}

EnterUrl.propTypes = {
  image: React.PropTypes.string.isRequired,
  handeUrlEnter: React.PropTypes.func.isRequired,
  bundleId: React.PropTypes.number.isRequired
}
