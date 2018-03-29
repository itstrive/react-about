import React, { Component } from 'react';
import {
    // BrowserRouter as Router,
    HashRouter as Router,
    Route,
    Switch
} from 'react-router-dom';
import Home from './Home'
import User from './User'
import Profile from './Profile'
import ProtectedRoute from './ProtectedRoute'
import Login from './Login'
import MenuLink from './MenuLink'
import NotFound from './NotFound'

class App extends Component {
    render() { 
        return (
            <Router>
                <div>
                    <div className="full-container">
                        <nav className="navbar navbar-dark bg-primary">
                            <div className="col-md-4">
                                <div className="navbar-brand">牧码人BOSS管理</div>
                            </div>
                            <div className="col-md-8">
                                <ul className="navbar-nav flex-row">
                                    <MenuLink to="/home" label="首页" />
                                    <MenuLink to="/user" label="学员管理" />
                                    <MenuLink to="/profile" label="个人设置" />
                                    {/* <li className="mx-3 active">
                                        <Link to="/home" className="nav-link">首页</Link>
                                    </li>
                                    <li className="mx-3">
                                        <Link to="/user" className="nav-link">学员管理</Link>
                                    </li>
                                    <li className="mx-3">
                                        <Link to="/profile" className="nav-link">个人设置</Link>
                                    </li> */}
                                </ul>
                            </div>
                        </nav>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <Switch>
                                <Route exact path='/' render={props=><div>此处是根</div>} />
                                {/* <Route exact path='/:name' render={props=><div>{props.match.params.name}</div>} /> */}
                                <Route path='/home' component={Home} />
                                <Route path='/user' component={User} />
                                <Route path='/login' component={Login} />
                                {/* <Route path='/profile' component={Profile} /> */}

                                <ProtectedRoute path="/profile" component={Profile} />

                                <Route component={NotFound} />
                            </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    }
}
 
export default App;