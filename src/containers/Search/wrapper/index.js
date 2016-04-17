import ImmutablePropTypes from 'react-immutable-proptypes'
import SearchHeader from '../header'
import SearchBody from '../body'

import './index.css'

export default function SearchWrapper (props) {
  return (
    <div className='search-wrapper'>
      <SearchHeader query={props.query} />
      <SearchBody {...props}/>
    </div>
  )
}

SearchWrapper.propTypes = {
  searchResults: ImmutablePropTypes.map,
  query: React.PropTypes.string,
  removeBundle: React.PropTypes.func,
  favorite: React.PropTypes.func,
  unfavorite: React.PropTypes.func
}
