//hello from wenfei
import ReactDOM from 'react-dom';
import React from 'react';
import App from './App';
import Routes from './Routes';
import store from './store'

ReactDOM.render(<Routes />, document.getElementById('root'))


//  if you render app, you only render '/' if you render the router, then you can render which ever route you set it to be. In orddr
//
//