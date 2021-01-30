import React, {Component} from 'react';
import './Posts.css';
import axios from 'axios';

import Post from '../../components/Post/Post';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        console.log(this.props);
        axios.get('/posts')
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
                console.log("ERROR:" + error)
                // const newError = error.toString()
                // this.setState({errors: true, errorMessage: newError});
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
            <section className="Posts">
                {posts}
            </section>
        )
    }
};

export default Posts;