import ImmutablePropTypes from 'react-immutable-proptypes'
import Title from './Title'
import Description from './Description'
import { BundleView, Editable } from '../../../components'
import { AddLink } from '../../'

import './index.css'

export default class BundleViewBody extends React.Component {
  render () {
    let {
      bundle,
      users,
      links,
      currentLink,
      editMode,
      toggleEditMode,
      handleLinkEdit,
      handleLinkRemove,
      handleChange,
    } = this.props

    return (
      <div className='bundle-view-body'>
        <BundleView.Title value={bundle.name} editMode={editMode} />

        <BundleView.Description value={bundle.description} editMode={editMode} />

        <AddLink bundle={bundle} currentLink={currentLink} links={links} />

        <div className='line' />

        {bundle.get('links').map((id, index) =>
          <BundleView.Link
            key={index}
            index={index}
            link={links.get(id)}
            creator={users.get(links.getIn([id, 'creator']))}
            editMode={editMode}
            handleLinkEdit={handleLinkEdit}
            handleLinkRemove={handleLinkRemove}
          />
        )}
      </div>
    )
  }
}

BundleView.Title = Title
BundleView.Description = Description

BundleViewBody.propTypes = {
  bundle: ImmutablePropTypes.record,
  users: ImmutablePropTypes.map,
  links: ImmutablePropTypes.map,
  currentLink: ImmutablePropTypes.record,
  editMode: React.PropTypes.bool,
  toggleEditMode: React.PropTypes.func,
  handleLinkEdit: React.PropTypes.func,
  handleLinkRemove: React.PropTypes.func,
  handleChange: React.PropTypes.func
}
