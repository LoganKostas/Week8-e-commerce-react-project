import './App.css';
import Feed from './Feed';
import { Routes , Route, BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react'
import Home from './Home';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Navbar from './Navbar';



export default class App extends Component {
  constructor() {
    super();
    this.state = {
        posts: [],
        user: [],
        username: 'logank',
        numposts: 0
    }
}

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/feed' element={<Feed/>}></Route>
            <Route path='/signup' element={<SignUp/>}></Route>
            <Route path='/signin' element={<SignIn/>}></Route>
            
          </Routes>
         
          {/* <Footer /> */}
        </div>
      </BrowserRouter>
    )
  }
}

