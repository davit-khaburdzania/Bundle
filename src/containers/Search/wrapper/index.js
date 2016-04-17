import ImmutablePropTypes from 'react-immutable-proptypes'
import SearchHeader from '../header'
import SearchBody from '../body'

import './index.css'

export default function SearchWrapper ({ query, searchResults, removeBundle, favorite, unfavorite }) {
  return (
    <div className='search-wrapper'>
      <SearchHeader query={query} />
      <SearchBody
        searchResults={searchResults}
        removeBundle={removeBundle}
        favorite={favorite}
        unfavorite={unfavorite}
      />
    </div>
  )
}

SearchWrapper.propTypes = {
  searchResults: ImmutablePropTypes.map,
  query: React.PropTypes.string
}
