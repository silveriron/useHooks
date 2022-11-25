import useNetwork from "./hooks/useNetwork"

const App = () => {

  const checkNetwork = (status:boolean) => {
    console.log(status ? 'online' : 'offline')
  }

  const status = useNetwork(checkNetwork)

  return (
    <div>
      <h1>{status? "online" : "offline"}</h1>
    </div>
  )
}

export default App