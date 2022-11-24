import useTitle from "./hooks/useTitle"


const App = () => {
  const setTitle = useTitle('Loading...')
  return (
    <div>
      <button onClick={() => setTitle('Home')} >Title Change</button>
    </div>
  )
}

export default App