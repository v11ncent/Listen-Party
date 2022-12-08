import RandomColor from "./Functions/RandomColor";

const Genre = (props) => {
  return (
    <li className="genre">
      <p>{props.name}</p>
    </li>
  );
};

export default Genre;

// <li className = "genre" style = {{ backgroundColor: RandomColor('red', 0.75) }}>
