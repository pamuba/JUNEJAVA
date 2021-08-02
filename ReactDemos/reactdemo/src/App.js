import './App.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import  Greet  from './components/Greet'
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import Welcome from './components/Welcome'
function App() {
  return (
    <div className="App">
      <header className="App-header">

        {/* <Greet name="Bruce" heroName="Batman">
          <p>Children Props</p>
          <button>CLICK</button>
        </Greet>
        <Greet name="Clark" heroName="Superman"></Greet> */}
        {/* <Greet name="Diana" heroName="Wonder Women"></Greet> */}
        
        {/* <Welcome name="Diana" heroName="Wonder Women"></Welcome> */}
        {/* <Counter></Counter> */}
        {/* <EventBind></EventBind> */}
        <ParentComponent></ParentComponent>
      </header>
    </div>
  );
}

export default App;
