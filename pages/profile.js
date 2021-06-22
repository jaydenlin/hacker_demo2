import React from 'react';
import s from './index.module.css';
import axios from 'axios';
import PageBase from '../components/PageBase'
import Cookies from 'js-cookie';
class Profile extends React.Component {
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

                </PageBase>
            </div>);
    }
}

export default Profile