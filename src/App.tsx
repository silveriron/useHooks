import useFullScreen from "./hooks/useFullScreen";

const App = () => {
  const [ref, onFullScreen, exitFullScreen] = useFullScreen<HTMLDivElement>()

  return (
    <div>
      <div ref={ref} >
        <img style={{width: 500}} alt='dog and cat' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1E1YvxZ9ca1o7MmeB6P0PdVfCeBLB4tGAdn38p_WmYw&s"/>
        <button onClick={exitFullScreen}>Exit Full Screen</button>
      </div>
      <button onClick={onFullScreen}>Full Screen</button>
    </div>
  );
};

export default App;