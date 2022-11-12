import { useAuth0 } from '@auth0/auth0-react';
import { Outlet } from 'react-router-dom';
import Login from './Login';
import Lougout from './Logout';
import Main from './Main';

const Root = () => {
    const { isAuthenticated } = useAuth0();

    return <Outlet />;
}

export default Root;