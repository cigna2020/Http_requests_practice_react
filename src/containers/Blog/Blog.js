import React, {Component} from 'react';
import {Route, NavLink, Switch, Redirect} from 'react-router-dom';


import Posts from '../Posts/Posts';
// import FullPost from '../FullPost/FullPost';
import './Blog.css';
// import NewPost from '../NewPost/NewPost';
import asyncComponent from '../../hoc/asyncComponent';

const AsyncNewPost = asyncComponent(() => {
    return import('../NewPost/NewPost');
});

class Blog extends Component {

    state = {
        auth: true
    }

    render() {
        return (
            <div className="Blog">
                <header >
                    <nav>
                        <ul>
                            {/* <li><a href="/">Home</a></li>
                            <li><a href="/new-post">New Post</a></li> */}
                            <NavLink to="/posts" exact className='link'>Posts</NavLink>
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
                <Switch>
                    {/* якщо є умовний оператор має бути блок Redirect */}
                    {/* {this.state.auth ? <Route path="/new-post" exact component={NewPost} /> : null} */}
                    {/* Lazy loading */}
                    {this.state.auth ? <Route path="/new-post" exact component={AsyncNewPost} /> : null}
                    <Route path="/posts" component={Posts} />
                    {/* В тому числі "ловить" всі невідомі запити (path) якщо from= просто "/" */}
                    {/* <Redirect from="/" to="/posts" /> */}
                    {/* "ловити"  невідомі запити (path) можна й так: */}
                    <Route render={() => <h1>Page not found!</h1>} />
                </Switch>
            </div>
        );
    }
}

export default Blog;