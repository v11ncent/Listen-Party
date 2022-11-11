import { useRouteError } from "react-router-dom";

const Error = () => {
    const error = useRouteError();
    console.error('There has been an error\n', error);

    return (
        <>
            <h1>There has been an error :(</h1>
            <i>{ error.statusText || error.message }</i>
        </>
    )
}

export default Error;