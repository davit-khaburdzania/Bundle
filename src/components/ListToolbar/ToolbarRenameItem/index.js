import React, { PropTypes } from 'react'

export default function ToolbarRenameItem ({
  id,
  startEdit,
  endEdit,
  editMode
}) {
  return <div className='icon icon-toolbar-rename'
    onClick={(editMode ? endEdit : startEdit).bind(this, id)} />
}

ToolbarRenameItem.propTypes = {
  id: PropTypes.number.isRequired,
  startEdit: PropTypes.func.isRequired,
  endEdit: PropTypes.func.isRequired,
  editMode: PropTypes.bool
}
