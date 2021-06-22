import React from 'react';
import s from './index.module.css';
import axios from 'axios';
import Cookies from 'js-cookie';
import PageBase from '../components/PageBase'
class Homepage extends React.Component { 
    static getInitialProps({query}) {
      return {query}
    }
    componentDidMount(){
      
    }

    render(){
      return (
      <div>
          <PageBase>

          </PageBase>
      </div>);
    }
  }


export default Homepage