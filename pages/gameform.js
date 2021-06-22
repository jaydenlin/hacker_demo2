import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class GameForm extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    onSameOriginSend = async ()=>{
        const response = await axios.get('/api/me');
        console.log(response.data);
    }
    onCrossOriginSend = async ()=>{
        const response = await axios.get('http://photo.com/api/me');
        console.log(response.data);
    }
    render(){
      return (
      <div className={s.wrapper}>
        遊戲網 Game.com 
        <form action="/api/dummy" method="post"> 
        <label className={s.formLabel}> Name: <input type="text" name="name" value="jayden lin" /> </label>
        <input type="submit" name="submit" value="同源送出"/>
        </form>

        <form action="http://photo.com/api/dummy" method="post"> 
        <label className={s.formLabel}> Name: <input type="text" name="name" value="jayden lin" /> </label>
        <input type="submit" name="submit" value="跨源送出"/>
        </form>

        
      </div>);
    }
  }


export default GameForm