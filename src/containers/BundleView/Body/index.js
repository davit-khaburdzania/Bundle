import ui from 'redux-ui'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { BundleView, Editable } from '../../../components'
import { AddLink } from '../../'

import './index.css'

@ui({
  key: 'bundleNew',
  state: {
    title: null,
    description: null
  }
})
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
      updateUI
    } = this.props

    return (
      <div className='bundle-view-body'>

        <Editable
          value={bundle.name}
          placeholder="title goes here"
          editMode={editMode}
          onChange={(value) => updateUI('title', value) }
        />

        <Editable
          value={bundle.description}
          placeholder="description goes here"
          editMode={editMode}
          onChange={(value) => updateUI('description', value) }
        />

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
