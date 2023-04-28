
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import Todolist from './components/toDoList/Todolist';



function App () {

  
    return (
      <div className="App">
        <Todolist />
      </div>
    );
  };

export default App;
