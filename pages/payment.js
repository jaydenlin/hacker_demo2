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
                example.com
                <p className={s.note}>我們發現您的付款資訊有誤，請重新輸入您的付款資訊</p>
                <form action="/api/dummy" method="post">
                    <label className={s.formLabel}> 信用卡 <input type="text" name="name" value="" /> </label>
                    <input type="submit" name="submit" value="送出"/>
                </form>

            </div>);
    }
}


export default GameForm