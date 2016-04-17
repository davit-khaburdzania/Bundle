import ImmutablePropTypes from 'react-immutable-proptypes'
import { List, ListItem } from '../../../components'
import './index.css'

function isAnyResult (searchResults) {
  return searchResults && (isBundles(searchResults) || isCollections(searchResults))
}

function isBundles (searchResults) {
  return searchResults.get('bundles').size
}

function isCollections (searchResults) {
  return searchResults.get('collections').size
}

function shouldShow (show) {
  return { 'display': show ? 'block' : 'none' }
}

function renderList (searchResults, listType, component, removeBundle, favorite, unfavorite) {
  return searchResults.map((item, index) => {
    let url = `/${listType}/${item.get('slug')}`

    return <ListItem
             key={index}
             {...item.toJS()}
             url={url}
             Component={component}
             remove={removeBundle}
             favorite={favorite}
             unfavorite={unfavorite}
           />
  })
}

function renderResults (searchResults, removeBundle, favorite, unfavorite) {
  const { Collection, Bundle } = ListItem

  if (!isAnyResult(searchResults)) {
    return <div className='search-note'>Search Bundles and Collections</div>
  }

  return (
    <div className='search-results'>
      <h3 className='title'>Search results</h3>

      <List>
        <h4 className='name' style={shouldShow(isCollections(searchResults))}>
          Collections
        </h4>

        {renderList(searchResults.get('collections'), 'collections', Collection, removeBundle, favorite, unfavorite)}
      </List>

      <List>
        <h4 style={shouldShow(isBundles(searchResults))}
          className='name'> Bundles
        </h4>

        {renderList(searchResults.get('bundles'), 'bundles', Bundle, removeBundle, favorite, unfavorite)}
      </List>

    </div>
  )
}

export default function SearchBody ({ searchResults, removeBundle, favorite, unfavorite }) {
  return (
    <div className='search-results-wrapper'>
      {renderResults(searchResults, removeBundle, favorite, unfavorite)}
    </div>
  )
}

SearchBody.propTypes = {
  searchResults: ImmutablePropTypes.map
}
