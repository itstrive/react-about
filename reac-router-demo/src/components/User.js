import React,{Component} from 'react';
import {
    Link,
    Route
} from 'react-router-dom'

import UserList from './UserList'
import UserAdd from './UserAdd'
import UserDetail from './UserDetail'

class Home extends Component{
    render(){
        return (
            <div className="row mt-2">
                <div className="col-md-3">
                    <ul className="nav">
                        <li className="nav-item">
                            <Link to="/user/list" className="nav-link">用户列表</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/user/add" className="nav-link">新增用户</Link>
                        </li>
                    </ul>
                </div>
                <div className="col-md-9">
                    <Route path="/user/list" component={UserList} />
                    <Route path="/user/add" component={UserAdd} />
                    <Route path="/user/detail/:id" component ={UserDetail} />
                </div>
            </div>
        )
    }
}
export default Home;