import React from 'react';

import None from '@@/None'
import './style.less'

class index extends React.Component {
    state={
        data:[]
    }
  componentDidMount(){
    console.log(this.props.match)
    let datas=JSON.parse(localStorage.getItem('list'))
    this.setState({
           data:datas
        })
  }
  componentWillReceiveProps(nextProps){
    console.log(nextProps.match)

  }
    render() {
        let { match }=this.props;
        let { data }=this.state;
console.log(data)
        return <div className='start'> 
           {
             match.params.id==='1'?data.map(v=>{
               return <dl key={v.id}>
                <dt><img src={v.imgurl} alt=' ' /></dt>
                <dd>
                <p>{v.pro_name}</p>
                <p>已团{v.sum}件</p>
                <p>
                  <span>
                    <i>{v.groupnum}团￥{v.min_price}</i>
                    <i>单买价￥{v.market_price}</i>
                  </span>
                  <span className='letgo' onClick={()=>{this.props.history.push('/detail')}}>去开团</span>
                </p>
                </dd>
               </dl>
             }):<None/>
           }
           </div>;
    }
}


export default index;