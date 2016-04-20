import ImmutablePropTypes from 'react-immutable-proptypes'
import { ResourceNavigation, List, ListItem } from '../../../components'

export default class Container extends React.Component {
  constructor (props) {
    super(props)
  }

  renderBundleListItem (bundle, index) {
    const { ...listItemProps, bundleId, removeBundle } = this.props

    return (
      <ListItem key={index} Component={ListItem.Bundle}
        {...bundle.toJS()} {...listItemProps}
        url={'/bundles/' + bundle.get('slug')}
        type={'bundle'}
        active={bundle.get('slug') === bundleId}
        remove={removeBundle}
      />
    )
  }

  renderCollectionListItem (collection, index) {
    const { ...listItemProps, collectionId, removeCollection } = this.props

    return (
      <ListItem key={index} Component={ListItem.Collection}
        {...collection.toJS()} {...listItemProps}
        url={'/collections/' + collection.get('slug')}
        type={'collection'}
        active={collection.get('slug') === collectionId}
        remove={removeCollection}
      />
    )
  }

  renderList () {
    const { list } = this.props

    return list.map((object, index) => {
      const data = object.get('favoritable')
      const dataType = object.get('favoritable_type')

      if (dataType === 'Bundle') return this.renderBundleListItem(data, index)

      return this.renderCollectionListItem(data, index)
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
    list: ImmutablePropTypes.list,
    collectionId: React.PropTypes.string,
    bundleId: React.PropTypes.string,
    removeBundle: React.PropTypes.func,
    removeCollection: React.PropTypes.func
  }
}
