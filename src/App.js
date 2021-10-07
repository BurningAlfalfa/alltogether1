import React, { Component, useState } from "react";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      userName: "",
      users: [],
      submitDisabled: true,
      userNameValid: false,
      errorMessage: "",
      gamesPlayed: 0,
      isShowingGamesPlayed: true,
    };
  }
  handleChangeFirstName = (e) => {
    this.setState({ firstName: e.target.value });
  };
  handleChangeLastName = (e) => {
    this.setState({ lastName: e.target.value });
  };
  handleChangeUserName = (e) => {
    this.setState({ userName: e.target.value });
  };
  onClickAddUser = () => {
    const isUniqueUserName = this.isUniqueUserName();
    if (isUniqueUserName === false) {
      this.setState({ errorMessage: "Choose a unique username" });
    } else {
      this.addUserInfo(
        this.state.firstName,
        this.state.lastName,
        this.state.userName,
        this.state.gamesPlayed
      );
      this.clearForm();
    }
  };
  handleToggleClick = () => {
    this.setState({ isShowingGamesPlayed: !this.state.isShowingGamesPlayed });
  };
  addUserInfo = (firstName, lastName, userName, gamesPlayed) => {
    const user = { firstName, lastName, userName, gamesPlayed };
    this.setState({ users: this.state.users.concat(user) });
  };
  clearForm = () => {
    this.setState({ firstName: "", lastName: "", userName: "" });
  };
  isUniqueUserName = () => {
    const found = this.state.users.find(
      (user) => user.userName === this.state.userName
    );
    return !Boolean(found);
  };

  render() {
    const { firstName, lastName, userName } = this.state;
    const isEnabled =
      firstName.length > 0 && lastName.length > 0 && userName.length > 0;
    console.log(this.state.users);

    return (
      <div className="App">
        <label>firstName</label>
        <input
          type="text"
          value={this.state.firstName}
          onChange={this.handleChangeFirstName}
        />
        <label>lastName</label>

        <input
          type="text"
          value={this.state.lastName}
          onChange={this.handleChangeLastName}
        />
        <label>username</label>
        <input
          type="text"
          value={this.state.userName}
          onChange={this.handleChangeUserName}
        />
        <button
          className="button"
          disabled={!isEnabled}
          onClick={this.onClickAddUser}
        >
          Add New User
        </button>

        <div>{this.state.errorMessage}</div>
        {console.log("test")}
        {this.state.users.map((user, index) => (
          <div key={index}>
            <div>Username </div>
            {user.userName}
            {this.state.isShowingGamesPlayed && (
              <div>
                <div>GamesPlayed</div> {user.gamesPlayed}
              </div>
            )}
          </div>
        ))}
        <button onClick={this.handleToggleClick}>Toggle Games Played </button>
      </div>
    );
  }
}

export default App;
