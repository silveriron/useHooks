import useFadeIn from "./hooks/useFadeIn"

const App = () => {
  const fade = useFadeIn<HTMLHeadingElement>(3)

  return (
    <div>
      <h1 {...fade} >Hello, World</h1>
    </div>
  )
}

export default App