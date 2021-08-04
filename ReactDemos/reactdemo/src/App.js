import './App.css';
import Counter from './components/Counter';
import EventBind from './components/EventBind';
import  Greet  from './components/Greet'
import Message from './components/Message';
import ParentComponent from './components/ParentComponent';
import Welcome from './components/Welcome'
import ControlledComponents from './components/ControlledComponents'
import PureComp from './components/PureComp';
import RegComp from './components/RegComp';
import ParentComp from './components/ParentComp';
import RefsDemo from './components/RefsDemo';
import ClickCounter from './components/ClickCounter';
import HoverCounter from './components/HoverCounter';
import 
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
        {/* <ParentComponent></ParentComponent> */}
        {/* <ControlledComponents></ControlledComponents> */}
       {/* <ParentComp></ParentComp> */}
       {/* <RefsDemo></RefsDemo> */}
       {/* <ClickCounter></ClickCounter>
       <HoverCounter></HoverCounter> */}

       <ErrorBoundary></ErrorBoundary>
      </header>
    </div>
  );
}

export default App;
