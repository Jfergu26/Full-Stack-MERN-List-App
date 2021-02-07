
import './App.css';
import Header from './components/Header' //Imports Header component
import Addtodo from './components/Addtodo' //Imports Addtodo component


function App() { //Components are called here
  return (
    <div className="app-container">
     <Header /> 
     <Addtodo />
    </div>
  );
}

export default App;
