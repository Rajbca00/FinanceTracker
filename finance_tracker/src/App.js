
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/home/Home'
import Login from './components/auth/Login'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login/>,
  },
  {
    path:'/home',
    element: <Home/>
  }
]);

function App() {

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
