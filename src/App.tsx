import usePreventLeave from "./hooks/usePreventLeave"


const App = () => {
  const [enablePrevent, disablePrevent] = usePreventLeave()

  return (
    <div>
      <button onClick={enablePrevent}>Enable</button>
      <button onClick={disablePrevent}>Disable</button>
    </div>
  )
}

export default App