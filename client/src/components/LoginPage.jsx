import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: '',
        pwd: ''
      }
    };
    this.processForm = this.processForm.bind(this);
  }

  processForm(event) {
    event.preventDefault();
    this.state.user = {
      email: event.target.email.value,
      pwd: event.target.pwd.value
    }
    console.log(this.state.user);
    axios.post('/login', {user: this.state.user})
    .then((res) => {
      console.log(res);
      if (res.data.jwt != undefined) {
        console.log(res.data.jwt);
        window.jwt = res.data.jwt;
      }
    });
  }

  render() {
    return (
      <div>
        <form action="/"  onSubmit={this.processForm}>
          <input type="text" name="email" />
          <input type="password" name="pwd"/>
          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}

export default LoginPage;
