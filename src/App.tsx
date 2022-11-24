import useConfirm from "./hooks/useConfirm"


const App = () => {
  const onDelete = () => console.log('delete docs')
  const onCancle = () => console.log('cancle')
  const onConfirm = useConfirm('Are you sure?', onDelete, onCancle)
  return (
    <div>
      <button onClick={onConfirm}>Delete Docs</button>
    </div>
  )
}

export default App