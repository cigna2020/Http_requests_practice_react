import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';


import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    render() {
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <Link to="/" className='link'>Home</Link>
                            <Link className='link' to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit=true'
                            }}>New Post</Link>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/"  render={() => <h1>HOME</h1>} /> */}
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

            </div>
        );
    }
}

export default Blog;