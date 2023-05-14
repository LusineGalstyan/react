import 'bootstrap/dist/css/bootstrap.min.css';
import "react-datepicker/dist/react-datepicker.css";
import 'react-toastify/dist/ReactToastify.css';
import './app.css';
import { ToastContainer } from "react-toastify";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Todolist from "./pages/toDoList/Todolist";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import NavBar from "./components/navBar/NavBar";
import SingleTask from "./pages/singleTask/SingleTask";
import NotFound from "./pages/notFound/NotFound";
// import Flex from "./components/Flex";

const pages = [
  {
    path: "/",
    element: <Todolist />,
  },
  {
    path: "/toDoList",
    element: <Todolist />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/task/:taskId",
    element: <SingleTask />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
];


function App () {

  
    return (
      <BrowserRouter>
      <main>
        <NavBar />
        
          
          {/* <Flex justifyContent="center" border={true}> */}
          {/* <div>test</div> */}
          {/* <span>test1</span> */}
          {/* <p>text example</p> */}
          {/* <button>just button</button> */}
        {/* </Flex> */}
{/*  */}
        {/* <Flex justifyContent="left"> */}
          {/* <div>test</div> */}
          {/* <span>test1</span> */}
          {/* <p>text example</p> */}
          {/* <button>just button</button> */}
        {/* </Flex> */}
{/*  */}
        {/* <Flex justifyContent="right"> */}
          {/* <div>test</div> */}
          {/* <span>test1</span> */}
          {/* <p>text example</p> */}
          {/* <button>just button</button> */}
        {/* </Flex> */}
{/*  */}
        {/* <Flex> */}
          {/* <div>test</div> */}
          {/* <span>test1</span> */}
          {/* <p>text example</p> */}
          {/* <button>just button</button> */}
        {/* </Flex> */}
          
          
          <Routes>
          {pages.map((page) => (
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
        </main> 
        
      </BrowserRouter>
     
    );
  };

export default App;
