import React from "react";
import Joi from "joi";
import Input from "./input";
class Form extends React.Component {
  validateInput({ name, value }) {
    // acquire data
    const date = {
      [name]: value,
    };
    const schema = Joi.object({
      [name]: this.schema[name],
    });
    // validate by data
    const { error } = schema.validate(date);
    return error ? error.details[0].message : null;
  }
  validateForm = () => {
    // aquire data
    const {
      schema,
      state: { form },
    } = this;
    // validate by data
    const { error } = Joi.object(schema).validate(form, {
      abortEarly: false,
    });

    // return null if no errors
    if (!error) {
      return null;
    }
    // return null if no errors
    const errors = {};
    for (const detail of error.details) {
      errors[detail.path[0]] = detail.message;
    }
    // return arranged details
    return errors;
  };
  handelSubmit = (e) => {
    console.log(e);
    e.preventDefault();

    const errors = this.validateForm();
    this.setState({ errors });
    if (errors) {
      return;
    }
    this.doSubmit();
  };
  HandelChange = ({ target }) => {
    const { form, errors } = this.state;
    this.setState({
      form: {
        ...form,
        [target.name]: target.value,
      },
      errors: {
        ...errors,
        [target.name]: this.validateInput(target),
      },
    });
    console.log([target.name]);
  };
  renderInput(name, label, type = "text", img) {
    const { form, errors } = this.state;
    return (
      <Input
        type={type}
        name={name}
        label={label}
        onChange={this.HandelChange}
        value={form[name]}
        error={errors && errors[name]}
        placeholder={img}
      />
    );
  }
  renderButton(label) {
    return (
      <button disabled={this.validateForm()} className="btn btn-primary">
        {label}
      </button>
    );
  }
}

export default Form;
