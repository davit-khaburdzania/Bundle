import { Link } from 'react-router'
import { ResourceNavigation, List, ListItem } from '../../../components'
import { NEW_BUNDLE_ID } from '../../../constants'
import './wrapper.css'

export default function Wrapper ({
  bundles,
  search,
  children,
  removeBundle,
  bundleId,
  ...listItemProps
}) {
  let styles = { 'display': search.get('open') ? 'none' : 'block' }
  let bundlesList = bundles.valueSeq()
    .filter(bundle => bundle.get('id') != NEW_BUNDLE_ID)
    .sortBy(bundle => bundle.get('created_at'))
    .reverse()
    .map((bundle, index) => {
      return <ListItem key={index}
        {...bundle.toJS()}
        {...listItemProps}
        Component={ListItem.Bundle}
        url={'/bundles/' + bundle.get('id')}
        type={'bundle'}
        active={bundle.get('id') === bundleId}
        remove={removeBundle}
      />
  })

  return (
    <ResourceNavigation>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 style={styles} className='title'>Bundles</h2>

          <div className='nav'>
            <Link to='/search' className='icon ion-ios-search search-icon' />
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {bundlesList}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
