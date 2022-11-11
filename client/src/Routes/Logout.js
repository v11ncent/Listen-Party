import { useAuth0 } from "@auth0/auth0-react";

const Logout = () => {
    const { logout } = useAuth0();

    return (
        <main>
            <h1>Logging out...</h1>
        </main>
    )
}

export default Logout;