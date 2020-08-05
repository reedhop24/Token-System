import React from 'react';
import Login from './components/login';
import HomeScreen from './components/homeScreen';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      username: null,
      password: null,
      error: null,
      errorMessage: null
    }
  }

  signIn = async () => {
    const token = await axios.get(`http://localhost:7000/login?username=${this.state.username}&password=${this.state.password}`);
    if(!token.data.auth) {
      this.setState({error: true, errorMessage: token.data.message});
      return;
    }

    sessionStorage.setItem('token', token.data.token);
    const validateToken = await axios.get('http://localhost:7000/validate', {
      headers: {
        'x-access-token': token.data.token
      }
    });

    if(validateToken.status === 200) {
      this.setState({signedIn: true});
    } else {
      this.setState({signedIn: false});
    }
  }

  logout = () => {
    sessionStorage.removeItem('token');
    this.setState({
      signedIn: false, 
      username: null,
      password: null, 
      errorMessage: null
    });
  }

  createUser = async () => {
    const token = await axios.post('http://localhost:7000/newUser', {username:this.state.username, password:this.state.password});
    sessionStorage.setItem('token', token.data.token);

    const validateToken = await axios.get('http://localhost:7000/validate', {
      headers: {
        'x-access-token': token.data.token
      }
    });

    if(validateToken.status === 200) {
      this.setState({signedIn: true});
    } else {
      this.setState({signedIn: false});
    }
  }

  componentDidMount () {
    const token = sessionStorage.getItem('token');
    if(token) {
      axios.get('http://localhost:7000/validate', {
        headers: {
          'x-access-token': token
        }
      }).then((res) => {
        if(res.status === 200) {
          this.setState({signedIn: true});
        } else {
          this.setState({signedIn: false});
        }
      });
    } else {
      this.setState({signedIn:false})
    }
  }

  render() {
    return (
      <div className="App">
        {this.state.signedIn === false ? <Login errorMessage={this.state.errorMessage} credentials={(x, y) => {this.setState({[x]: y})}} getSignIn={() => this.signIn()} createAccount={() => this.createUser()}/> : <HomeScreen logout={() => this.logout()}/> }
      </div>
    );
  }
}

export default App;
