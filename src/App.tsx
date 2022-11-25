import useScroll from "./hooks/useScroll"

const colorList = [
  {
    point: 0,
    color: 'red'
  },
  {
    point: 500,
    color: 'orange'
  },
  {
    point: 1000,
    color: 'yellow'
  },
  {
    point: 1500,
    color: 'green'
  },
  {
    point: 2000,
    color: 'blue'
  },
  {
    point: 2500,
    color: 'indigo'
  },
  {
    point: 3000,
    color: 'purple'
  },

]

const App = () => {
  const {y} = useScroll()

  const colorPicker = (point:number) => {
    let color = 'red'
    colorList.forEach((data) => {
      if (data.point <= point) {
        color = data.color
        
      }
    })
    return color
  }

  const color = colorPicker(y)

  return (
    <div style={{height: '1000vh'}}>
      <h1 style={{position: 'fixed', color: color}}>Hello, World</h1>
    </div>
  )
}

export default App