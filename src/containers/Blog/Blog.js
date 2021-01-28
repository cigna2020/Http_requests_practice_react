import React, {Component} from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        selectedPostId: null,
        errors: false,
        errorMessage: '',
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                const posts = response.data.slice(0, 4);
                const updatePosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Alex'
                    }
                })

                this.setState({posts: updatePosts});
                // console.log(this.state.posts);
            })
            .catch(error => {
                // console.log("ERROR:" + error)
                const newError = error.toString()
                this.setState({errors: true, errorMessage: newError});
            });
    }

    postSelectedHandler = (id) => {
        this.setState({selectedPostId: id});
    }

    render() {
        let posts = this.state.posts.map(post => {
            return <Post
                key={post.id}
                title={post.title}
                author={post.author}
                clicked={() => this.postSelectedHandler(post.id)}
            />
        });
        if (this.state.errors) {
            posts =
                <div>
                    <p>Something wrong! </p>
                    <p>{this.state.errorMessage}</p>
                </div>
        };



        return (
            <div>
                <section className="Posts">
                    {posts}
                </section>
                <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;