import React,{Component} from 'react';

class UserDetail extends Component{
    render(){
        let id = this.props.match.params.id;

        let userStr = localStorage.getItem('users');
        let users = userStr ? JSON.parse(userStr):[];
        
        let user = users.find(user=>user.id.toString()===id);

        return (
            <div>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>用户模拟ID</th>
                            <th>用户名</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.userName}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default UserDetail;