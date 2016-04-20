import { Link } from 'react-router'
import { Date, ListToolbar } from './../..'

export default function BundleListItem ({
  id,
  active,
  name,
  created_at,
  url,
  ...toolbarProps
}) {
  return (
    <div>
      <ListToolbar id={id} {...toolbarProps} />

      <Link to={url}>
        <h1>
          {name}
        </h1>
        <h2>
          Created <Date type='fromNow'>{created_at}</Date>
        </h2>
      </Link>
    </div>
  )
}

BundleListItem.propTypes = {
  id: React.PropTypes.string.isRequired,
  name: React.PropTypes.string.isRequired,
  created_at: React.PropTypes.string.isRequired,
  url: React.PropTypes.string.isRequired
}
