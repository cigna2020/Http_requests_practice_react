import React, {Component} from 'react';
import './Posts.css';
import axios from 'axios';
import {Route} from 'react-router-dom';
// import {Link} from 'react-router-dom';

import Post from '../../components/Post/Post';
import FullPost from '../FullPost/FullPost';

class Posts extends Component {
    state = {
        posts: [],
    }

    componentDidMount() {
        // console.log(this.props);
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
        // this.setState({selectedPostId: id});
        // this.props.history.push('/posts/' + id);
        this.props.history.push({pathname: '/posts/' + id}); // Можна використовувати замість <Link>
    }

    render() {
        let posts = this.state.posts.map(post => {
            return (
                // <Link to={"/posts/" + post.id} key={post.id}>
                <Post
                    key={post.id}
                    title={post.title}
                    author={post.author}
                    clicked={() => this.postSelectedHandler(post.id)}
                />
                // </Link>
            )
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
                <Route path={this.props.match.url + '/:id'} exact component={FullPost} />
            </div>
        )
    }
};

export default Posts;