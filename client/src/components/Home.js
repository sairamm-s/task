import React, { Component } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';

export class Home extends Component {
  state = {
    name: '',
    desc: '',
    profile: [],
  };
  componentDidMount() {
    axios.get('http://localhost:8080/profile/').then((res) => {
      this.setState({ profile: res.data });
      console.log(res.data);
    });
  }
  logOut = () => {
    localStorage.clear();
    this.props.history.push('/login');
  };
  submitHandler = (e) => {
    const articles = {
      name: this.state.name,
      desc: this.state.desc,
    };
    axios
      .post('http://localhost:8080/profile/', articles)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
    this.setState({
      name: '',
      desc: '',
    });
  };
  // onFormSubmit = (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('myfile', this.state.file);
  //   const config = {
  //     headers: {
  //       'content-type': 'multipart/form-data',
  //     },
  //   };
  //   axios
  //     .post('http://localhost:5000/upload', formData, config)
  //     .then((response) => {
  //       alert('The file is successfully uploaded');
  //     })
  //     .catch((error) => {});
  // };
  render() {
    return (
      <div className='container text-center' style={{ marginTop: '150px' }}>
        <h1>Welcome!</h1>
        {/* <form onSubmit={this.onFormSubmit}>
          <div className='form-group'>
            <input
              type='file'
              onChange={(e) => {
                this.setState({ file: e.target.file });
              }}
            />
          </div>
        </form> */}
        <form onSubmit={this.submitHandler}>
          <div class='form-group'>
            <label for='exampleInputEmail1'>Enter your name</label>
            <input
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              aria-describedby='emailHelp'
              placeholder='Enter name'
              required
            />
          </div>
          <div class='form-group'>
            <label for='exampleInputEmail1'>About yourself</label>
            <textarea
              type='text'
              class='form-control'
              id='exampleInputEmail1'
              onChange={(e) => this.setState({ desc: e.target.value })}
              placeholder='About yourself'
              value={this.state.desc}
              aria-describedby='emailHelp'
              required
              rows='3'
            ></textarea>
          </div>
        </form>
        <button className='btn btn-danger mr-2' onClick={this.submitHandler}>
          Update profile
        </button>
        <button className='btn btn-danger' onClick={this.logOut}>
          LOGOUT
        </button>
        <div className='mt-5'>
          <h5 className='text-center'>Profile</h5>
          {this.state.profile.map((user) => (
            <>
              <h1>{user.name}</h1>
              <h1>{user.desc}</h1>
            </>
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
