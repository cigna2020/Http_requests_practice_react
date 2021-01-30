import React, {Component} from 'react';
import {Route, NavLink} from 'react-router-dom';


import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';
import FullPost from '../FullPost/FullPost';
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
                            <NavLink to="/" exact className='link'>Home</NavLink>
                            <NavLink className='link'
                                activeClassName="my-active"  // щоб змінити дефолтне значення 'active'
                                activeStyle={{              // стилі, що будуть додані після кліка. Щоб не використовувати css files
                                    color: 'red',
                                    textDecoration: 'underline'
                                }}
                                to={{
                                    pathname: '/new-post',
                                    hash: '#submit',
                                    search: '?quick-submit=true'
                                }}>New Post</NavLink>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/"  render={() => <h1>HOME</h1>} /> */}
                {/* <Route path="/" exact render={() => <Posts />} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/:id" exact component={FullPost} />
                <Route path="/new-post" exact component={NewPost} />

            </div>
        );
    }
}

export default Blog;