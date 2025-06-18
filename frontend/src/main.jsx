import { createRoot } from 'react-dom/client';
import { Toaster } from './components/ui/sonner';
import './index.css';
import {  RouterProvider } from 'react-router-dom';
import Router from './Router.jsx';

createRoot(document.getElementById('root')).render(
  <>
    <RouterProvider router={Router}/>
    <Toaster/>
  </>
);
