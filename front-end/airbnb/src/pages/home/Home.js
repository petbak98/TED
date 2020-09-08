import React, { Component } from "react";
import ListingsFind from '../../components/Listings/ListingsFind/ListingsFind';
import UserService from "../../_services/user.service";

class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getListings().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header>Welcome to Travel Advisor</header>
        <ListingsFind />
      </div>
    );
  }
}

export default Home;