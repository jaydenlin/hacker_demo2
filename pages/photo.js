import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class PhotoPage extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    onSameOriginSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    onCrossOriginSend = async ()=>{
        const response = await axios.get('http://game.com/api/me');
        console.log(response.data);
    }
    render(){
      return (
      <div className={s.wrapper}>
        圖片網 Photo.com
        <a className={s.btn} onClick={this.onSameOriginSend}>同源請求 (Same-Origin)</a>
        <a className={s.btn} onClick={this.onCrossOriginSend}>跨源請求 (Cross-Origin)</a>
      </div>);
    }
  }


export default PhotoPage