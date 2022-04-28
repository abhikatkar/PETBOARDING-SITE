import logo from './logo.svg';
import './App.css';
import {Home} from "./Components/Home";
import { Navbar } from './Components/Navbar';
import { Allroutes } from './Components/Allroutes';

function App() {
  return (
    <div className="App">
      
     <Navbar/>
     <Allroutes/>
    </div>
  );
}

export default App;



