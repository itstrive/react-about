import React,{Component} from 'react';
import {
    Link
} from 'react-router-dom';

class UserList extends Component{
    constructor(props){
        super(props);

        this.state={
            users:[]
        };
    }
    componentWillMount(){
        let userStr = localStorage.getItem('users');
        let users = userStr ? JSON.parse(userStr):[];

        this.setState({users});
    }
    render(){
        let users = this.state.users;

        return (
            <ul className="list-group">
                {
                    users.map((user,index)=>(
                        <li key={index} className="list-group-item">
                            <Link to={`/user/detail/${user.id}`}>{user.userName}</Link>
                        </li>
                    ))
                }
            </ul>
        )
    }
}

export default UserList;