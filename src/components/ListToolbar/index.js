import ToolbarShareItem from './ToolbarShareItem'
import ToolbarDeleteItem from './ToolbarDeleteItem'
import ToolbarFavoriteItem from './ToolbarFavoriteItem'

import './index.css'

export default function ListToolbar ({
  type,
  id,
  favorited,
  favorite,
  unfavorite,
  remove
}) {
  return (
    <div className='list-toolbar'>
      <ToolbarShareItem />

      <ToolbarDeleteItem id={id} remove={remove} />

      <ToolbarFavoriteItem type={type} id={id} favorited={favorited}
        favorite={favorite} unfavorite={unfavorite}
      />
    </div>
  )
}

ListToolbar.propTypes = {
  type: React.PropTypes.string.isRequired,
  id: React.PropTypes.number.isRequired,
  favorited: React.PropTypes.bool,
  favorite: React.PropTypes.func.isRequired,
  unfavorite: React.PropTypes.func.isRequired,
  remove: React.PropTypes.func.isRequired
}
