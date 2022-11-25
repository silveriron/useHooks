import useNotification from "./hooks/useNotification";

const App = () => {
  const noti = useNotification()
  return (
    <div>
      <h1 onClick={noti}>Hello, World</h1>
    </div>
  );
};

export default App;