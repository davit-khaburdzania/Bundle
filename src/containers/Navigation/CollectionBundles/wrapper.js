import { Link } from 'react-router'
import { ResourceNavigation, List, ListItem } from '../../../components'

function bundleUrl (collection, bundle) {
  return `/collections/${collection.get('id')}/bundles/${bundle.get('id')}`
}

export default function Wrapper ({
  collection,
  bundles,
  bundleId,
  children,
  removeBundle,
  ...listItemProps
}) {
  let bundleList = bundles.map((bundle, index) => {
    return <ListItem key={index}
      {...bundle.toJS()}
      {...listItemProps}
      Component={ListItem.Bundle}
      url={bundleUrl(collection, bundle)}
      type={'bundle'}
      remove={removeBundle}
      active={bundle.id === bundleId}
    />
  })

  return (
    <ResourceNavigation bundleView={children}>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 className='title'>{collection.name}</h2>
          <div className='nav'>
            <Link to='/search' className='icon ion-ios-search search-icon' />
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {bundleList}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
