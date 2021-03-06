import ImmutablePropTypes from 'react-immutable-proptypes'
import { ResourceNavigation, List, ListItem } from '../../../components'

export default class Container extends React.Component {
  renderBundleListItem (bundle, index) {
    const { ...listItemProps, bundleId, removeBundle } = this.props

    return (
      <ListItem
        key={index}
        Component={ListItem.Bundle}
        {...bundle.toJS()} {...listItemProps}
        url={'/bundles/' + bundle.id}
        type={'bundle'}
        active={bundle.id === bundleId}
        remove={removeBundle}
      />
    )
  }

  renderCollectionListItem (collection, index) {
    const { ...listItemProps, collectionId, createCollection, removeCollection } = this.props

    return (
      <ListItem
        key={index}
        Component={ListItem.Collection}
        {...collection.toJS()} {...listItemProps}
        url={'/collections/' + collection.id}
        type={'collection'}
        active={collection.id === collectionId}
        createCollection={createCollection}
        remove={removeCollection}
      />
    )
  }

  renderList () {
    const { favorites, bundles, collections } = this.props

    return favorites.map((item, index) => {
      let id = item.get('id')
      let type = item.get('type')

      if (type == 'Bundle') {
        return this.renderBundleListItem(bundles.get(id), index)
      } else {
        return this.renderCollectionListItem(collections.get(id), index)
      }
    })
  }

  render () {
    return (
      <ResourceNavigation>
        <div className='favorites-navigation'>
          <ResourceNavigation.Header>
            <div className='top-nav'>
              <h2 className='title'>Favorites</h2>
            </div>
          </ResourceNavigation.Header>
          <ResourceNavigation.Body>
            <List>
              {this.renderList()}
            </List>
          </ResourceNavigation.Body>
        </div>
      </ResourceNavigation>
    )
  }

  static propTypes = {
    favorites: ImmutablePropTypes.list.isRequired,
    bundles: ImmutablePropTypes.map.isRequired,
    collections: ImmutablePropTypes.map.isRequired,
    removeBundle: React.PropTypes.func.isRequired,
    removeCollection: React.PropTypes.func.isRequired,
    createCollection: React.PropTypes.func.isRequired,
    collectionId: React.PropTypes.string,
    bundleId: React.PropTypes.string
  }
}
