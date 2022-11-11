import { useState, useEffect } from "react";
import PostLobby from "../Functions/PostLobby";
import GetGenres from "../Functions/GetGenres";
import TextInput from "./TextInput";
import CheckboxInput from "./CheckboxInput";
// https://www.freecodecamp.org/news/beginner-react-project-build-basic-forms-using-react-hooks/
// https://reactjs.org/docs/forms.html

const initialValues = { 
    name: 'Lobby', 
    genres: [{ genre_id: 1, genre_name: 'Ambient' }] 
};

const CreationForm = () => {
    const [values, setValues] = useState(initialValues);
    
    const handleInputChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;

        setValues({
            ...values,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        await PostLobby(values);
        setValues(initialValues);
    }

    return (
        <form action="http://localhost:8080/create" method="post" className="form" onSubmit={ handleSubmit }>
            <TextInput 
                name = "name" 
                label = "Lobby name" 
                value = { values.name }
                onChange = { handleInputChange } 
            />
            <fieldset>
                <legend>Choose some genres</legend>
                <CheckboxInput 
                    name = "ambient" 
                    label = "Ambient"
                    onChange = { handleInputChange }
                />
                <CheckboxInput name = "breakcore" label = "Breakcore" />
                <CheckboxInput name = "dnb" label = "DnB" />
            </fieldset>
            <div>
                <input type="submit" value="Create lobby" className="form__button"></input>
            </div>
        </form>
    );
}

export default CreationForm;

// useEffect(() => {
    //     (async () => setGenres(await GetGenres(10)))();
    // }, []);