import React from 'react';
import { Icon } from 'antd';
import moment from 'moment'
import Pubhead from '@@/Pubhead'
import Foot from '@@/Foot'
import './style.less'
import { get } from '@/until/request';

class index extends React.Component {
    state={
        'title':'商品详情',
        'list':[],
        'img':'',
        'attrList':[],
        'freight_name':'',
        'hour':'',
        'minute':'',
        'seconds':'',

    }
    clickk=()=>{
          this.props.history.push('/pin/1')
      }
      componentDidMount(){
        get('goods.json').then(res=>{
            console.log(res)
            this.setState({
                'list':res,
                 'img':res.detail.image,
                 'freight_name':res.detail.freight_name,
                 'attrList':res.attrList,
            })
        })
        const setTimes = str =>{
        return ()=>{
          str-=1000;
          const time=moment(str)
          
          return {
            hour:time.format('H'),
            minute:time.format('m'),
            seconds:time.format('s'),

      }
    }
}
const times = moment().hour(22).minute(30).seconds(38).valueOf()
const fn=setTimes(times);
const id= setInterval(()=>{
  console.log(fn())
  this.setState({
    'hour':fn().hour,
    'minute':fn().minute,
    'seconds':fn().seconds
})
},1000)
    }
    
    render() {
       let { title ,list,img,freight_name,attrList,hour,minute,seconds} =this.state;

        return <div id='detail'> 
           <Pubhead title={title} clickk={this.clickk}/>
           <div id='det'>
              <div><img src={img} alt='' /></div>
               <div>
                  <div>
                    <p>
                          <span>￥{list.min_price}</span>
                          <span>{list.kai_min_man}人团</span>
                      </p>
                      <p>单买价￥52.00
                      </p>
                  </div>
                  <div id='pp'>
                    <p> <span>距活动结束仅剩</span> </p>
                      <p>
                          <span></span>天: <span>{hour}</span>:<span>{minute}</span>:<span>{seconds}</span>
                      </p>
                  </div>
               </div>
           </div>
          <div id='big'>
            <div>
              <p>{list.pro_name}</p>
              <p>运费:{freight_name}</p>
            </div>
            <div id='page'>
              <p>5片</p>
              <p><Icon type='right' /></p>
            </div>
            <div>
              <p>拼团玩法</p>
              <p>拼团规则</p>
            </div>
            <div><img src='./pintuanwanfa.png' alt='' /></div>

          </div>
           <Foot two={list.kai_min_price}/>
           </div>;
    }
}


export default index;