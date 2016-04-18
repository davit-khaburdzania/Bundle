import { ResourceNavigation, List, ListItem } from '../../../components'

export default function Container () {
  return (
    <ResourceNavigation>
      <div className='favorites-navigation'>
        <ResourceNavigation.Header>
          <div className='top-nav'>
            <h2 className='title'>Favorites</h2>
          </div>
        </ResourceNavigation.Header>
        <ResourceNavigation.Body>
          <div>
            favorites
          </div>
          {/*<List>
            {bundles.map((bundle, index) =>
              <ListItem key={index} Component={ListItem.Bundle}
                {...bundle.toJS()} {...listItemProps}
                url={'/bundles/' + bundle.get('slug')}
                type={'bundle'}
                active={bundle.get('slug') === bundleId}
                remove={removeBundle}
              />
            )}
          </List>*/}
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
