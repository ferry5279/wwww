import React from 'react';
import { NavLink,Route,Switch,Redirect } from 'react-router-dom'
import Pubhead from '@@/Pubhead'
import Start from '@/pages/Start'
import './style.less'
class index extends React.Component {
  state={
      'title':'拼团'
  }
  clickk=()=>{
    console.log(this.props)
      this.props.history.push('/')
  }
    render() {
       let { title } =this.state;
        return <div className='pin'> 
           <Pubhead title={title} clickk={this.clickk}/>
           <div id='link'>
             <p><NavLink to='/pin/1' activeClassName='act' exact>今日拼团</NavLink></p>
             <p><NavLink to='/pin/2'  activeClassName='act'>拼团抢先知</NavLink></p>
           </div>
           <div>
               {
                  <Switch>
                    <Route path='/pin/:id' component={Start}/>
                    <Redirect to='/pin/1'/>
                  </Switch>
               }
           </div>
           </div>;
    }
}


export default index;