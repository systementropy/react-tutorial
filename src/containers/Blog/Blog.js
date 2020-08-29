import React, { Component } from 'react';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';
// import Axios from 'axios';
import Axios from '../../axios';
class Blog extends Component {
    state = {
        posts: [],
        selectedPost:null,
        hasError: false
    }
    componentDidMount(){
        Axios.get('/posts').then(response =>{
            
            const posts = response.data.slice(0,10);
            const updatedPosts = posts.map(post => {
                return {...post,author:'Max'}
            })
        
            this.setState({posts: updatedPosts})

            // console.log(response);
        }).catch(error => {
            this.setState({hasError: true})
            console.log(error);
        })
    }
    fetchPostData = (id) => {
        this.setState({selectedPost: id})
    }
    render () {
        let posts = <p style={{textAlign:"center", color: "#dc3502"}}>Something went wrong!!!</p>
        if(!this.state.hasError){
            posts = this.state.posts.map(post => {
                // console.log(post);
                return <Post 
                    key={post.id} 
                    title={post.title} 
                    author={post.author} 
                    clicked={() => this.fetchPostData(post.id)}/>
            });
        }

        
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPost}/>
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;