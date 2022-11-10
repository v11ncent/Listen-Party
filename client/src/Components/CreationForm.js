import { useState, useEffect } from "react";
import PostLobby from "../Functions/PostLobby";
import GetGenres from "../Functions/GetGenres";
import TextInput from "./TextInput";
// https://www.freecodecamp.org/news/beginner-react-project-build-basic-forms-using-react-hooks/

const CreationForm = () => {
    const initialValues = { name: 'Lobby', genres: [{ genre_id: 1, genre_name: 'Ambient' }] };
    const [values, setValues] = useState(initialValues);
    const [genres, setGenres] = useState([]);

    useEffect(() => {
        (async () => setGenres(await GetGenres(10)))();
    }, []);

    const handleNameChange = (event) => {
        setValues((values) => ({
            ...values,
            name: event.target.value 
        }));
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        setValues(initialValues);
        await PostLobby(values);
    }

    return (
        <form action="http://localhost:8080/create" method="post" className="form" onSubmit={ handleSubmit }>
            <div>
                <label htmlFor="lobbyName" className="form__label">Enter lobby name</label>
                <TextInput name = "name" placeholder = "Lobby" />
            </div>
            {/* <fieldset>
                <legend>Choose some genres</legend>
                <div>
                    <input type="checkbox" id="ambient" name="ambient" className="form__checkbox" checked />
                    <label htmlFor="ambient">Ambient</label>
                </div>
            </fieldset> */}
            <div>
                <input type="submit" value="Create lobby" className="form__button"></input>
            </div>
        </form>
    );
}

export default CreationForm;