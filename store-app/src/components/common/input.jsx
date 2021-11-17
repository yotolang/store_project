const Input = ({ name, label, error, img, ...rest }) => {
  return (
    <div className="from-group">
      <label className="text-dark" htmlFor={name} id={name}>
        {label}
      </label>
      <br />
      <input {...rest} name={name} id={name} className="name col-12" />
      <br />
      {error && <span className="text-danger">{error}</span>}
    </div>
  );
};

export default Input;
