import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import { ToastContainer } from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Loader from './components/loader/Loader';
import { Provider } from 'react-redux';
import {useSelector} from 'react-redux';
import {routes} from './routes';
import {store} from './redux/store';

const AppWrapper = () => {
  
  return (
    <Provider store={store}> 
      <App /> 
    </Provider>
  )
}


function App () {
    
    const isLoaderActive = useSelector((state) => state.loader.isLoading);
    
    return (
      
      <BrowserRouter>
      <main>
        <NavBar />         
          
        <Routes>
        {routes.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
        </Routes>
        <ToastContainer
        position="bottom-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        />
        
        {isLoaderActive  && <Loader/>}
        
        </main> 
        
        
      </BrowserRouter>
      
    );
  }

export default AppWrapper;
