import React from 'react';
import { NavLink} from 'react-router-dom'

import './style.less'
class index extends React.Component {
  
    render() {
      let { pluginList,clic }=this.props;
        return <div id='plugin'> 
          <div id='plugindiv'>
          {
            pluginList.map((v,i)=>{
              return (
                <dl key={i} onClick={()=>clic(v)}>
                  <dt><img src={`https://xiaochengxu.houjiemeishi.com/V3.3/${v.appimg}`} alt='' /></dt>
                  <dd>{v.name}</dd>
                </dl>
              )
            })
          }
          </div>
           </div>;
    }
}


export default index;