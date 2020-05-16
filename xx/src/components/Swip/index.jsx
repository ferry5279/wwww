import React from 'react';
import Swiper from 'swiper';
import 'swiper/js/swiper.min.js'
import 'swiper/css/swiper.min.css'
class index extends React.Component {

  componentDidMount() {
    new Swiper('.swiper-container', {
      pagination: {
        el: '.swiper-pagination',
      },
    });
  
  }
  render() {
    let { banner }=this.props;
      return <div className = '' >
      <div className="swiper-container">
        <div className="swiper-wrapper">
          {
            banner.map((v,i)=>{
              return <div className="swiper-slide" key={v.id}><img src={v.image} alt=''/></div>
            })
          }
        </div>
        <div className="swiper-pagination"></div>
  </div>
  
      </div>;
  }
  }
  
  export default index;