const CheckboxInput = (props) => {
  return (
    <div>
      <input
        type="checkbox"
        name={props.name}
        onChange={props.onChange}
        className="form__checkbox"
      />
      <label htmlFor={props.name} className="form__label">
        {props.label}
      </label>
    </div>
  );
};

export default CheckboxInput;
