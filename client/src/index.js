import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Routes/Root';
import Error from './Routes/Error';
import Login from './Routes/Login';
import App from './Routes/App';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  createBrowserRouter,
  RouterProvider,
  Route
} from 'react-router-dom';
import './stylesheets/css/main.css';

const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT = process.env.REACT_APP_AUTH0_CLIENT;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/app",
        element: <App />
      },
      {
        path: "/lobby/:lobbyId",
        element: <h1>Lobby</h1>
      }
    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
  domain={ AUTH0_DOMAIN }
  clientId={ AUTH0_CLIENT }
  redirectUri={`${window.location.origin}/app`}
  >
    <RouterProvider router = { router } />
  </Auth0Provider>
);