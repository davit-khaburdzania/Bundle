export default function ToolbarFavoriteItem ({
  type,
  id,
  favorite,
  favorited,
  unfavorite
}) {
  if (favorited) {
    return <div className='icon icon-toolbar-favorite-full'
      onClick={unfavorite.bind(this, type, id)}
    />
  } else {
    return <div className='icon icon-toolbar-favorite'
      onClick={favorite.bind(this, type, id)}
    />
  }
}

ToolbarFavoriteItem.propTypes = {
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.string.isRequired,
  favorited: React.PropTypes.bool.isRequired,
  favorite: React.PropTypes.func.isRequired,
  unfavorite: React.PropTypes.func.isRequired
}
