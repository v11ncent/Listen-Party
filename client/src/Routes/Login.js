import { useAuth0 } from '@auth0/auth0-react';

const Login = () => {
    const { loginWithRedirect, user, isAuthenticated, isLoading } = useAuth0();

    if (isLoading) {
        return <div>Add a spinner</div>;
    };

    if (!isAuthenticated) {
        return (
            <main>
                <h1>Please log in</h1>
                <button onClick={ () => loginWithRedirect() }>
                    Log In
                </button>
            </main>
        );
    };
};

export default Login;