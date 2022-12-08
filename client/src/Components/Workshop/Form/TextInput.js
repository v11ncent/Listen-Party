const TextInput = (props) => {
  return (
    <div>
      <label htmlFor={props.name} className="form__label">
        {props.label}
      </label>
      <input
        type="text"
        name={props.name}
        value={props.value}
        onChange={props.onChange}
        className="form__text"
      />
    </div>
  );
};

export default TextInput;
