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
import ErrorBoundary from './components/ErrorBoundary'
import ErrorBoundaryImp from './components/ErrorBoundaryImp';
import ComponentC from './components/ComponentC';
import { UserProvider } from './components/UserContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import UseStates from './components/UseStates';
import ClassCounterOne from './components/ClassCounterOne'
import HookCounterOne from './components/HookCounterOne'


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

      {/* <ErrorBoundaryImp>
        <ErrorBoundary heroName="Batman"></ErrorBoundary>
      </ErrorBoundaryImp>

      <ErrorBoundaryImp>
        <ErrorBoundary heroName="Superman"></ErrorBoundary>
      </ErrorBoundaryImp>

      <ErrorBoundaryImp>
        <ErrorBoundary heroName="Joker"></ErrorBoundary>
      </ErrorBoundaryImp> */}

     <UserProvider value="Superman">
      <ComponentC></ComponentC>
     </UserProvider>
     {/* <PostList></PostList> */}
     {/* <PostForm></PostForm> */}
     {/* <UseStates></UseStates> */}

     {/* <ClassCounterOne></ClassCounterOne> */}
     {/* <HookCounterOne></HookCounterOne> */}
      </header>
    </div>
  );
}

export default App;
