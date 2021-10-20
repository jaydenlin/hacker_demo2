import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class GamePage extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    onSameOriginSend = async ()=>{
        const response = await axios.get('/api/cookie');
    }
   
    render(){
      return (
      <div className={s.wrapper}>
        <a className={s.btn} onClick={this.onSameOriginSend}> 送出 Cookie </a>
      </div>);
    }
  }


export default GamePage