import React, { Component } from "react";
import axios from "axios";
import Users from "./Users"
import Login from "./Login"

export default class Home extends Component {
  async callMyBackend() {
    // this is an example call to our backend
    let responseFromBackend = await axios.get("http://localhost:5000/api/users");
    console.log(responseFromBackend);
  }
  render() {
    return (
      <div>
        < Login />
      </div>
    );
  }
}