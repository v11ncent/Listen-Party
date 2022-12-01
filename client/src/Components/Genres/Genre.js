import RandomColor from './Functions/RandomColor';

const Genre = (props) => {
    const name = props.name;

    return (
        <li className = "genre" style = {{ backgroundColor: RandomColor('red', 0.75) }}>
            <p>{ name }</p>
        </li>
    );
}

export default Genre;