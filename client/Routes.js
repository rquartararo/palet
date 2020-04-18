import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreatePost from "./components/CreatePost"
import Post from './components/Post'

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/createPost' exact component={CreatePost} />
        <Route path='/post' exact component={Post} />
      </Switch>


    </BrowserRouter >
  )
}

export default Routes