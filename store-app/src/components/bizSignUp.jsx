import Joi from "joi";
import Form from "./common/form";
import userService, { createUser } from "../services/user";
import Title from "./common/PageTitle";
import profile1 from "../images/user1.webp";

class BizSignUp extends Form {
  state = {
    form: {
      email: "",
      password: "",
      name: "",
    },
  };
  schema = {
    email: Joi.string()
      .required()
      .email({ tlds: { allow: false } }),
    password: Joi.string().required().min(6),
    name: Joi.string().required().min(2),
  };
  async doSubmit() {
    const { form } = this.state;
    const body = { ...form, biz: true };

    try {
      await createUser(body);
      await userService.login(body.email, body.password);
      window.location = "/create-cards";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { email: response.date } });
      }
    }
  }
  render() {
    return (
      <>
        <Title title="SignUp for Bizzness" />
        <div className="formBody">
          <div className="formWrapper">
            <div className="imgs">
              <div className="container-imgs">
                <img src={profile1} alt="profile" className="profile" />
              </div>
            </div>
            <form onSubmit={this.handelSubmit} autoCapitalize="off" noValidate>
              <div className="col-12">{this.renderInput("email", "Email")}</div>
              <div className="col-12">
                {this.renderInput("password", "Password", "password")}
              </div>

              {this.renderInput("name", "Name")}
              <div className="mt-2">{this.renderButton("Sign up")}</div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default BizSignUp;
