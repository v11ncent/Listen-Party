import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Routes/Root';
import Error from './Routes/Error';
import { Auth0Provider } from '@auth0/auth0-react';
import './stylesheets/css/main.css';
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
    <Auth0Provider
    domain="dev-yf6jmzvmr0hazrie.us.auth0.com"
    clientId="UOrFarsBnr3pBSMym8h1OFNTyw76WqP6"
    redirectUri={window.location.origin}
    >
      <RouterProvider router = { router } />
    </Auth0Provider>
  </React.StrictMode>
);