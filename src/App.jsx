import { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import './New.css';
import Todolist from './Todolist/Todolist';



class App extends Component {


render(){
    document.title = 'To Do List'
    return (
        
      <div className="App">
        
        <Todolist/>
        

      </div>
    );
  }

}
export default App;
