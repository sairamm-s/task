import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { toast } from 'react-toastify';
import axios from 'axios';

export class Login extends Component {
  state = {
    email: '',
    password: '',
  };
  componentDidMount() {
    const token = localStorage.getItem('auth');
    if (token) {
      this.props.history.push('/home');
    } else {
      this.props.history.push('/login');
    }
  }
  emailHandler = (e) => {
    this.setState({ email: e.target.value });
  };

  passHandler = (e) => {
    this.setState({ password: e.target.value });
  };
  loginHandle = (e) => {
    e.preventDefault();

    const user = {
      email: this.state.email,
      password: this.state.password,
    };
    axios
      .post('http://localhost:8080/users/login', user)
      .then((res) => {
        console.log(res.data);
        localStorage.setItem('auth', JSON.stringify(res.data));
        this.props.history.push('/home');
      })
      .catch((err) => {
        toast.error(err.response.data);
      });
  };
  render() {
    return (
      <div className='login-section bg-light container'>
        <div className='row'>
          <div className='col-4 left p-5'>
            <div className='row justify-content-center left align-items-center'>
              <div className='col-12 text-center'>
                <h3>Discovery Gift</h3>
              </div>
            </div>
            <form onSubmit={this.loginHandle} className='mt-5'>
              <div className='row'>
                <div className='col-12'>
                  <h1 className='display-6'>Log in.</h1>
                  <p className='p1 text-muted'>
                    Login with the data that you entered during registration
                  </p>
                </div>
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>
                  Enter your email address
                </label>
                <input
                  type='email'
                  value={this.state.email}
                  placeholder='name@example.com'
                  onChange={(e) => this.emailHandler(e)}
                  className='form-control'
                  id='exampleInputEmail1'
                  aria-describedby='emailHelp'
                />
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>
                  Enter your password
                </label>
                <input
                  type='password'
                  value={this.state.password}
                  placeholder='atleast 8 characters'
                  onChange={(e) => this.passHandler(e)}
                  className='form-control'
                  id='exampleInputPassword1'
                />
              </div>
              <button
                type='submit'
                className='btn login btn-primary mt-5 mr-5 w-100 d-block text-center'
              >
                Login
              </button>
              <div class='form-check mt-3 frm'>
                <input
                  type='checkbox'
                  class='form-check-input'
                  id='exampleCheck1'
                  checked
                />
                <label class='text-muted form-check-label' for='exampleCheck1'>
                  Use password for logging ino my account
                </label>
              </div>
              <p className='clr mt-3 text-center'>
                <a href='/'>Forgot password?</a>
              </p>
            </form>
            <hr />
            <div className=' text-center'>
              <button
                type='submit'
                className='btn signup btn-outline-primary mr-5'
              >
                Sign up now
              </button>
            </div>
          </div>
          <div className='col-8 justify-content-center align-items-center text-center'>
            <div style={{ marginTop: '250px' }}>
              <p className='lead'>Nice to see you again</p>
              <h1 className='clr'>Welcome Back</h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
