import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users : [{email: "email"}]
    };


  }

  componentDidMount() {
    axios.get('/users', {
      params: {
        jwt: window.jwt
      }
    })
      .then((res) => {
        const users = res.data;
        console.log(users);
        this.setState({users});
      });
  }


  render() {
    return(
      <ul>
        {
          this.state.users.map((user) =>
            <li>{user.email}</li>
          )
        }
      </ul>
    )
  }
}
export default HomePage;
