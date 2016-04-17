import { ResourceNavigation, List, ListItem } from '../../../components'

function bundleUrl (collection, bundle) {
  return `/collections/${collection.get('id')}/bundles/${bundle.get('slug')}`
}

export default function Wrapper ({
  collection,
  children,
  removeBundle,
  bundleId,
  ...listItemProps
}) {
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
            {collection.get('bundles').map((bundle, index) =>
              <ListItem key={index} j Component={ListItem.Bundle}
                {...bundle.toJS()} {...listItemProps}
                url={bundleUrl(collection, bundle)}
                type={'bundle'}
                remove={removeBundle}
                active={bundle.get('slug') === bundleId}
              />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
