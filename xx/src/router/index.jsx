import React from 'react';
import { Route, Switch } from 'react-router-dom'
import './style.less'
import {Home,Pin,Detail} from './assembly' 

class index extends React.Component {
  render() {
    return <div className='App'>
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/detail' component={Detail} />
        <Route path='/pin' component={Pin} />
        <Route path='/' component={Home} />
        
      </Switch>
    </div>;
  }
}
 
 
export default index;

