// 
//
//In a router file, think of router file as a component that your react dom is trying to render/ The only difference is that it lets you set different route
import Home from "./components/Home"
import NavBar from "./components/NavBar"
import CreatePost from "./components/CreatePost"

import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


const Routes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/createPost' exact component={CreatePost} />
      </Switch>


    </BrowserRouter >
  )
}

export default Routes