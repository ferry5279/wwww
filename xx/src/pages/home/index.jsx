import React from 'react';
import { get } from '@/until/request';
// import { NavLink } from 'react-router-dom'
// import './style.less'
import Header from '@@/Header'
import Swip from '@@/Swip'
import Plugin from '@@/Plugin'
import Likely from '@@/Likely'
class index extends React.Component {
    state={
        'logo':'',
        'banner':[],
        'pluginList':[],
        'goodsList':[]
    }
    clic = (val) => { 
      if(val.name==='拼团'){
        // console.log(this.props)
        this.props.history.push('/pin')
      }
    }
  componentDidMount(){
      get('home.json').then(res=>{
          console.log(res)
          this.setState({
              'logo':res.data.logo,
              'banner':res.data.banner,
              'pluginList':res.data.plugin_list,
              'goodsList':res.data.goods_list,

          })
      })
     get('pintuan.json').then(res => {
        localStorage.setItem('list',JSON.stringify(res.list))

    })
  }
  
    render() {
     let { logo,banner,pluginList,goodsList }=this.state;
        return <div > 
           <Header logo={logo}/>
           <div id='inner'>
            <Swip banner={banner}/>
            <Plugin pluginList={pluginList} clic={this.clic}/>
            <Likely goodsList={goodsList} />
           </div>
           </div>
    }
}


export default index;