import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Routes/Root';
import Error from './Routes/Error';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router = { router } />
  </React.StrictMode>
);