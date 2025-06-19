import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { Home, Login, Signup } from './Index';
import ProtectedRoute from './components/ProtectedRoute';

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: (
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        ),
      },
      { path: 'login', element: <Login /> },
      { path: 'signup', element: <Signup /> },
    ],
  },
]);

export default Router;
