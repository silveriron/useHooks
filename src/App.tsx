import useClick from "./hooks/useClick"


const App = () => {
  const logHello = () => console.log('hello, world')
  const titleRef = useClick<HTMLHeadingElement>(logHello)
  return (
    <div>
      <h1 ref={titleRef} >Click me</h1>
    </div>
  )
}

export default App