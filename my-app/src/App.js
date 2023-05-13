import logo from './logo.svg';
import './App.css';
// import FunctionalGreeting from './components/FunctionalGreeting';
// import FunctionalGreetingWithProps from './components/FunctionalGreetingWithProps';
// import StatefulGreeting from './components/StatefulGreeting';
import StatefulGreetingWithPreviousState from './components/StatefulGreetingWithPrevState';

function App() {
  return (
    <div className='App'>
      <StatefulGreetingWithPreviousState />
    </div>
    // <div className='App'>
    //   <StatefulGreeting greeting="I'm a stateful class component" />
    // </div>
    // <div className="App">
    //   <FunctionalGreetingWithProps greeting="nice to meet you!!" name="Mike" age="32" />
    // </div>
  );
}

export default App;
