import { toast } from "react-toastify";
import productService from "../services/productService";
import Form from "./common/form";
import Joi from "joi";
import Title from "./common/PageTitle";
import profile1 from "../images/user1.webp";
class EditCard extends Form {
  state = {
    form: {
      bizTitle: "",
      bizPrice: "",
      bizCompany: "",
      bizImage: "",
    },
  };

  schema = {
    _id: Joi.string(),
    bizPrice: Joi.number().min(1).required().label("Price"),
    bizTitle: Joi.string().min(2).max(1024).required().label("Description"),
    bizCompany: Joi.string().min(2).max(400).required().label("Address"),
    bizImage: Joi.string().min(11).max(1024).allow("").label("Image"),
  };

  async componentDidMount() {
    const id = this.props.match.params.id;
    console.log(id + "id");
    const {
      data: { _id, bizTitle, bizCompany, bizPrice, bizImage },
    } = await productService.getProduct(id);
    this.setState({
      form: {
        _id,
        bizCompany,
        bizPrice,
        bizTitle,
        bizImage,
      },
    });
  }
  async doSubmit() {
    const { form: card } = this.state;
    await productService.editProduct(card);
    toast("Card isupDated...");
    window.location = "/my-cards";
  }
  render() {
    return (
      <>
        <Title title="Edit your product" />
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
              <div className="mt-2">{this.renderButton("Edit Product")}</div>
            </form>
          </div>
        </div>
      </>
    );
  }
}

export default EditCard;
