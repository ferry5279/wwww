import React from 'react';
import './style.less'
import Publicone from '@@/Publicone'
class index extends React.Component {
    render() {
      let { goodsList }=this.props;
        return <div id='like'> 
          <div id=''>
          {
            goodsList.map((v,i)=>{
              return (<Publicone key={v.id} value={v}/>)
            })
          }
          </div>
          <p>已经到底了</p>
           </div>;
    }
}


export default index;