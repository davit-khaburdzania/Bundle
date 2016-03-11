import React, { PropTypes } from 'react'

export default function ToolbarRenameItem ({
  id,
  edit,
  editMode
}) {
  return <div className='icon icon-toolbar-rename'
    onClick={edit.bind(this, id, ! editMode)} />
}

ToolbarRenameItem.propTypes = {
  id: PropTypes.number.isRequired,
  edit: PropTypes.func.isRequired,
  editMode: PropTypes.bool
}
