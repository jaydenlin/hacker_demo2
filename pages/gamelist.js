import React from 'react';
import s from './index.module.css';
import axios from 'axios';
class GamePage extends React.Component { 
    constructor(props) {
        super(props);
        this.onGetPosts.bind(this);
        this.onGetComments.bind(this);
        this.state = {posts:[], comments:[]}
    }
    static getInitialProps({query}) {
      return {query}
    }
    onGetPosts = async ()=>{
        const response = await axios.get('/api/posts');
        this.setState({
            posts: response.data
        })
        console.log(response.data);
    }
    onGetComments = async (postId)=>{
        const response = await axios.get(`/api/posts/${postId}/comments`);
        this.setState({
            comments: response.data
        })
        console.log(response.data);
    }
    render(){
      const {posts=[], comments=[]} = this.state;  

      const postNodes = posts.map((post, index)=>{
        return <li key={post.id} onClick={this.onGetComments.bind(this, post.id)}>
            <span>{post.title}</span>
          </li>
      });

      const commentNodes = comments.map((comment, index)=>{
        return <li key={comment.id}>
            <span>{comment.body}</span>
          </li>
      });

      return (
      <div className={s.wrapper}>
        遊戲清單 Game.com 
        <a className={s.btn} onClick={this.onGetPosts}>顯示遊戲清單</a>
        <ul className={s.posts}>
            {postNodes}
        </ul>
        <ul className={s.comments}>
            {commentNodes}
        </ul>
      </div>);
    }
  }


export default GamePage