import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class SignUpPage extends React.Component {
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
    axios.post('/signup', {user: this.state.user})
    .then((res) => {
      console.log(res);
    });
  }

  render() {
    return (
      <div>
        <form action="/"  onSubmit={this.processForm}>
          <input type="text" name="email" />
          <input type="password" name="pwd"/>
          <button type="submit">Sign up</button>
        </form>
      </div>
    )
  }
}

export default SignUpPage;
