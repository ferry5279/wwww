import React from 'react';
import './style.less'

class index extends React.Component {
    
    render() {
      let {two}=this.props;
        return <div id='foot'> 
            <div className='lef'>
              <dl>
                <dt><img src='./kefu2x.png' alt='' /></dt>
                <dd>客服</dd>
            </dl>
            <dl>
            <dt><img src='./footshare2x.png' alt='' /></dt>
                <dd>分享</dd>
            </dl>
            </div>
             <div className='rig'>
              <p>
                <span>￥52.00</span>
                <span>单独购买</span>
              </p>
              <p>
                <span>￥{two}</span>
                <span>我要开团</span>
              </p>
            </div>
           </div>;
    }
}


export default index;