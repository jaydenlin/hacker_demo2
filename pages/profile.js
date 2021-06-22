import React from 'react';
import s from './index.module.css';
import axios from 'axios';
import PageBase from '../components/PageBase'
import DataList from '../components/DataList'
import Cookies from 'js-cookie';
class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: {}
        }
    }
    static getInitialProps({query}) {
        return {query}
    }
    async componentDidMount(){

        const result = await axios.get(`/api/funds`);
        this.setState({
            data: result.data
        })
    }
    render(){
        const {data} = this.state;
        console.log(data)
        return (
            <div>
                <PageBase>
                    <DataList data={data}/>
                </PageBase>
            </div>);
    }
}

export default Profile