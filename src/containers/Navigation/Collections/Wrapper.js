import { List, ListItem, ResourceNavigation } from '../../../components'

export default function Wrapper ({
  collections,
  generateNewCollection,
  removeCollection,
  createCollection,
  ...listItemProps
}) {
  let collectionsList = collections.map((collection, index) => {
    return <ListItem key={index}
      {...collection.toJS()}
      {...listItemProps}
      Component={ListItem.Collection}
      type={'collection'}
      remove={removeCollection}
      createCollection={createCollection}
    />
  })

  return (
    <ResourceNavigation>
      <div className='bundles-navigation'>
        <ResourceNavigation.Header>
          <h2 className='title'>Collections</h2>
          <div className='nav'>
            <span className='ion-ios-albums icon' onClick={generateNewCollection}>+</span>
            <span className='ion-ios-search icon'></span>
          </div>
        </ResourceNavigation.Header>

        <ResourceNavigation.Body>
          <List>
            {collectionsList}
          </List>
        </ResourceNavigation.Body>
      </div>
    </ResourceNavigation>
  )
}
