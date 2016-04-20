import { ResourceNavigation, List, ListItem } from '../../../components'

function bundleUrl (collection, bundle) {
  return `/collections/${collection.get('id')}/bundles/${bundle.get('id')}`
}

export default function Wrapper ({
  collection,
  children,
  removeBundle,
  bundleId,
  ...listItemProps
}) {
  let bundleList = collection.get('bundles')
    .sortBy(col => col.get('created_at'))
    .reverse()
    .map((bundle, index) => {
      return <ListItem key={index}
        {...bundle.toJS()}
        {...listItemProps}
        Component={ListItem.Bundle}
        url={bundleUrl(collection, bundle)}
        type={'bundle'}
        remove={removeBundle}
        active={bundle.get('id') === bundleId}
      />
    })

  return (
    <ResourceNavigation bundleView={children}>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 className='title'>{collection.get('name')}</h2>
          <div className='nav'>
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
