import React from 'react';
import s from './index.module.css';
import axios from 'axios';
import PageBase from '../components/PageBase'
import SignInForm from '../components/SignInForm'
import Cookies from 'js-cookie';
class SignIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            errorMessage: null
        }
    }
    static getInitialProps({query}) {
        return {query}
    }
    render(){
        return (
            <div>
                <PageBase>
                <SignInForm
                    onSubmit={async (values) => {
                        try {
                            // 呼叫登入 API
                            const result = await axios.post(`/api/signin`, {
                                "username": values.username,
                                "password": values.password
                            });
                            // 登入成功

                        } catch (e) {
                            // 登入失敗
                            this.setState({
                                errorMessage: "登入失敗"
                            })
                        }
                    }}
                    errorMessage={this.state.errorMessage}
                />
                </PageBase>
            </div>);
    }
}

export default SignIn