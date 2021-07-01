import React, { Component } from 'react';
import axios from "axios";
import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: []
    }
    
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((response) => {
            const posts = response.data.slice(0, 4)
            const updatedPosts = posts.map((eachupdatedPost) => {
                return{
                    ...eachupdatedPost, //doing this same as doing 'title: eachupdatedPost.title' since at the end we are getting the title in <Post title = {posts.title}/>
                    author: 'Udin'
                }
            })

            this.setState({posts: updatedPosts})
        })  
    }

    render () {
        const posts = this.state.posts.map((eachPost) => {
            return <Post title={eachPost.title} key={eachPost.id} author={eachPost.author}/>
        })
        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;