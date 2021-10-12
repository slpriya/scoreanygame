import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import isEmpty from "../validation/is-empty";

export default class Facebook extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      picture: "",
      isLoggedIn: false,
    };
  }
  componentClicked = () => {
    console.log("Clicked");
  };
  responseFacebook = (response) => {
    // console.log(response);

    if(response!=null) {

      this.setState({
        name: response.name,
        email: response.email,
        picture:  !isEmpty( response.picture.data) ? response.picture.data.url : "",
        isLoggedIn: true,
      });
    }
  };
  render() {
    let fbContent;
    if (this.state.isLoggedIn) {
      fbContent = (
        <div
          style={{
            width: "400px",
            margin: "auto",
            background: "#6d788a",
            padding: "20px",
            color : "black"
          }}
        >
          <img src={this.state.picture} alt={this.state.name} />
          <h4 stylr = {{fontSize : "15px" , color : "black"}}> Welcome {this.state.name} </h4>
          email : {this.state.email}
        </div>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="1238142293330946"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
          textButton={<span>Login With Facebook</span>}
        />
      );
    }
    return <div>{fbContent}</div>;
  }
}
