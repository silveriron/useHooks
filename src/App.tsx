import useTaps from "./hooks/useTaps"

const contents = [
  {
    name: 'Button One',
    content: 'this is category One',
  },
  {
    name: 'Button Two',
    content: 'this is category Two',
  },
  {
    name: 'Button Three',
    content: 'this is category Three',
  },
]

const App = () => {
  const [content, setIndex] = useTaps(0, contents)
  return (
    <div>
      {contents.map((data, index) => <button key={index} onClick={() => setIndex(index)}>{data.name}</button>)}
      <p>{content.content}</p>
    </div>
  )
}

export default App