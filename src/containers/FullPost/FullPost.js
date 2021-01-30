import React, {Component} from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {
    state = {
        loadedPost: null,
    }

    componentDidMount() {
        // console.log(this.props);
        const postId = this.props.match.params.id;
        if (postId) {
            if (!this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== postId)) {        // без перевірки отримаємо loop, компонент оновився, запрос, оновився...
                axios.get('https://jsonplaceholder.typicode.com/posts/' + postId)
                    .then(response => {
                        // console.log(response);
                        this.setState({loadedPost: response.data})
                    });
            }
        }
    }

    deletePostHandler = () => {
        axios.delete('/posts/' + this.props.match.params.id)
            .then(response => {
                console.log(response);
            });
    }

    render() {

        let post = <p style={{textAlign: 'center', color: 'red'}}><strong>Please select a Post!</strong></p>;
        if (this.props.id) {
            post = <p style={{textAlign: 'center', color: 'red'}}><strong>Loading...!</strong></p>
        }
        if (this.state.loadedPost) {
            post = (
                <div className="FullPost" >
                    <h1>{this.state.loadedPost.title}</h1>
                    <p>{this.state.loadedPost.body}</p>
                    <div className="Edit">
                        <button className="Delete" onClick={this.deletePostHandler}>Delete</button>
                    </div>
                </div>
            );
        }
        return post;
    }
}

export default FullPost;