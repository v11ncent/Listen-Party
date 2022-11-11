import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <main>
            <h1>Please log in</h1>
            <button onClick={ () => loginWithRedirect() }>
                Log In
            </button>
        </main>
    );
};

export default Login;