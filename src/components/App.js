import React, { Component } from 'react';
import './App.css';
import ButtonFetchUsers from './ButtonFetchUsers';
import UsersList from './UsersList';

const API = 'https://randomuser.me/api/?results=5';

class App extends Component {

  state = {
    users: null
  }

  handleDataFetch = () => {
    fetch(API)
      .then(response => {
        if (response.ok) {
          console.log(response);
          return response
        }
        throw Error('We have a problem!')
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
        this.setState({
          users: data.results
        })
      })
      .catch(error => console.log(error))
  }

  render() {

    const users = this.state.users;

    return (
      <div className="App">
        <ButtonFetchUsers click={this.handleDataFetch} />
        {users ? <UsersList users={users} /> : users}
      </div>
    );
  }
}

export default App;
