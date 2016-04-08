export default function ToolbarDeleteItem ({
  id,
  remove
}) {
  return (
    <div className='icon icon-toolbar-delete'
      onClick={remove.bind(this, id)}
    />
  )
}
