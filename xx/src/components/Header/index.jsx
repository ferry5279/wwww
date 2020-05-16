import React from 'react';
import './style.less'
class index extends React.Component {
    render() {
      let {logo}=this.props;
        return <div id='header'> 
           <div><img src={logo} alt=''/></div>
           <div><input type='text' placeholder='搜索你想要的东西'/></div>
           <div><img src='./footshare2x.png' alt=''/></div>
           </div>;
    }
}


export default index;