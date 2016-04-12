import { ResourceNavigation, List, ListItem } from '../../../components'

function bundleUrl (collection, bundle) {
  return `/collections/${collection.id}/bundles/${bundle.slug}`
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
          <h2 className='title'>{collection.name}</h2>
          <div className='nav'>
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {collection.bundles.map((bundle, index) =>
              <ListItem key={index} j Component={ListItem.Bundle}
                {...bundle} {...listItemProps}
                url={bundleUrl(collection, bundle)}
                type={'bundle'}
                remove={removeBundle}
                active={bundle.slug === bundleId}
              />
            )}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
