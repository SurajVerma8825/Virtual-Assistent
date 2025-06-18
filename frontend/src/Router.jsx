import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Login, Signup } from './Index';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/signup',
    element: <Signup />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default Router;
