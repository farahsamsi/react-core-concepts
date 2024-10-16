
import './App.css'
import Counter from './Counter';
import Team from './Team';
import Users from './Users';
import User from './User';

function App() {

  function handleClick() {
    alert('Button Clicked');
  }

  const handleClick2 = () => alert('Other button clicked')

  const addToFive = (number) => alert(number + 5);

  return (
    <>
      <h3>React Core Concepts</h3>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me One</button>
      <button onClick={handleClick2}>Click Me Two</button>
      <button onClick={() => alert('Third button clicked')}>Click Me Three</button>

      <button onClick={() => addToFive(3)}>CLick me Four</button>
    </>
  )
}

export default App
