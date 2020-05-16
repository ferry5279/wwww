import React from 'react';
// import './style.less'
class index extends React.Component {
    render() {
      let { value }=this.props;
        return <div id=''> 
          <div id=''>
          {
            <dl key={value.id}>
              <dt><img src={value.imgurl} alt='' /></dt>
              <dd>
                <p>{value.product_title}</p>
                <p>{value.price}</p>
                <p>
                  <span>月销量:{value.volume}件</span>
                  <span><img src='footshare.png' alt='' /></span>                  
                </p>
              </dd>
            </dl>
          }
          </div>
           </div>;
    }
}


export default index;