import Form from "./common/form";
import Title from "./common/PageTitle";
import Joi from "joi";
import productService from "../services/productService";
import { toast } from "react-toastify";
import profile1 from "../images/user1.webp";

class CreateCard extends Form {
  state = {
    form: {
      bizPrice: "",
      bizCompany: "",
      bizTitle: "",
      bizImage: "",
      bizinCart: false,
    },
  };

  schema = {
    bizPrice: Joi.number().min(2).required().label("Price"),
    bizTitle: Joi.string().min(2).max(1024).required().label("Title"),
    bizCompany: Joi.string().min(2).max(1024).required().label("Company name"),
    bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
    bizinCart: Joi.boolean(),
  };
  async doSubmit() {
    const {
      form: { bizImage, ...body },
    } = this.state;

    if (bizImage) {
      body.bizImage = bizImage;
    }

    try {
      await productService.CreateCard(body);
      toast("A new card is opened");
      //this.props.history.push("/my-cards");
      window.location = "/my-cards";
    } catch ({ response }) {
      if (response && response.status === 400) {
        this.setState({ errors: { bizImage: response.data } });
      }
    }
  }
  render() {
    return (
      <>
        <Title title="creat your product and sand it to the store" />
        <div className="formBody">
          <div className="formWrapper">
            <div className="imgs">
              <div className="container-imgs">
                <img src={profile1} alt="profile" className="profile" />
              </div>
            </div>
            <form onSubmit={this.handelSubmit} autoCapitalize="off" noValidate>
              <div className="col-12">
                {this.renderInput("bizCompany", "Company")}
              </div>
              <div className="col-12">
                {this.renderInput("bizTitle", "title")}
              </div>

              {this.renderInput("bizPrice", "price")}
              {this.renderInput("bizImage", "Business image")}
              <div className="mt-2">{this.renderButton("Creat Product")}</div>
            </form>
          </div>
        </div>
      </>
      // <>
      //   <Title title="Real app Create Cards" />
      //   <div className="row">
      //     <div className="col-12">
      //       <p style={{ color: "gray", fontSize: "2em" }}>
      //         create a new businees card!!
      //       </p>
      //     </div>
      //   </div>
      //   <form onSubmit={this.handelSubmit} autoCapitalize="off" noValidate>
      //     {this.renderInput("bizCompany", "Company")}
      //     {this.renderInput("bizTitle", "title")}
      //     {this.renderInput("bizPrice", "price")}
      //     {this.renderInput("bizImage", "Business image")}

      //     <div className="mt-2">{this.renderButton("Create card")}</div>
      //   </form>
      // </>
    );
  }
}

export default CreateCard;
