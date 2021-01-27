import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Switch, Route } from 'react-router-dom';
import { Home } from './components/Home';
import { Login } from './components/Login';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ProtectedRoute } from './components/ProtectedRoute';
import FileUpload from './components/FileUpload';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Login} />
        <Route path='/login' component={Login} />
        <ProtectedRoute path='/home' component={Home} />
        <ToastContainer
          position='top-right'
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}

export default App;
