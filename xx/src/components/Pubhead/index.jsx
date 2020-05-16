import React from 'react';
import { Icon } from 'antd';
import propTypes from 'prop-types'
import './style.less'

class index extends React.Component {
  static propTypes = {
    title:propTypes.string
  }
  
    render() {
      let { title,clickk }=this.props;
        return <div id='pubhead'>
           <div onClick={clickk}> <Icon type="left" /></div>
           <div>{title}</div>
          
           </div>;
    }
}


export default index;