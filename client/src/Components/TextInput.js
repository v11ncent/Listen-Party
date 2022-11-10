import { useState } from 'react';

const TextInput = (props) => {
    const [text, setText] = useState(props.placeholder);

    const handleTextChange = (event) => {
        setText(event.target.value);
    }

    return (
        <input
            type = "text"
            name = { props.name }
            placeholder = { props.placeholder }
            value = { text }
            onChange = { handleTextChange }
            className = "form__text"
        />
    );
}

export default TextInput;