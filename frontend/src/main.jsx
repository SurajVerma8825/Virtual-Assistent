import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Toaster } from './components/ui/sonner';
import './index.css';
import store from './Redux/Store';
import Router from './Router.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <Provider store={store}>
      <RouterProvider router={Router} />
    </Provider>
    <Toaster />
  </>
);
