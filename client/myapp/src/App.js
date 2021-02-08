
import './App.css';
import Header from './components/Header' //Imports Header component
import Addtodo from './components/Addtodo' //Imports Addtodo component
import Todos from './components/Todos' //imports Todos component
import { Provider } from './context'


function App() { //Components are called here
  return (
    <Provider>

    <div className="app-container">

     <Header /> 
     <Addtodo />
     <Todos />
     
    </div>

    </Provider>
    
  );
}

export default App;
