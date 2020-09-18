import React from 'react';
import Axios from '../../../axios';
import Post from '../../../components/Post/Post';
import './Posts.css'
class Posts extends React.Component{
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
	render (){
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
		return(
			<section className="Posts">
				{posts}
			</section>
		)
	}
}
export default Posts;