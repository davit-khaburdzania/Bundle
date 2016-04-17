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

function renderList (searchResults, listType, component, props) {
  let { removeBundle, favorite, unfavorite } = props

  return searchResults.map((item, index) => {
    let url = `/${listType}/${item.get('slug')}`
    let type = (listType == 'bundles') ? 'bundle' : 'collection'

    return <ListItem
             key={index}
             {...item.toJS()}
             type={type}
             url={url}
             Component={component}
             remove={removeBundle}
             favorite={favorite}
             unfavorite={unfavorite}
           />
  })
}

function renderResults (props) {
  const { Collection, Bundle } = ListItem
  const { searchResults } = props

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

        {renderList(searchResults.get('collections'), 'collections', Collection, props)}
      </List>

      <List>
        <h4 style={shouldShow(isBundles(searchResults))}
          className='name'> Bundles
        </h4>

        {renderList(searchResults.get('bundles'), 'bundles', Bundle, props)}
      </List>

    </div>
  )
}

export default function SearchBody (props) {
  return (
    <div className='search-results-wrapper'>
      {renderResults(props)}
    </div>
  )
}

SearchBody.propTypes = {
  searchResults: ImmutablePropTypes.map,
  removeBundle: React.PropTypes.func,
  favorite: React.PropTypes.func,
  unfavorite: React.PropTypes.func
}
