import useBeforeLeave from "./hooks/useBeforeLeave"

const App = () => {
  const event = () => {
    alert('Are you sure?')
  }
  
  useBeforeLeave(event)
  return (
    <div>
      <h1>Hello, World</h1>
    </div>
  )
}

export default App