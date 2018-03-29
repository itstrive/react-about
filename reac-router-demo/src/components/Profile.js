import React,{Component} from 'react';
import PropTypes from 'prop-types'
class Home extends Component{
    constructor(props,context){
        super(props,context);
        this.router = context.router;
    }
    logout = () =>{
        localStorage.removeItem('login');
        //console.log(this.context);

        this.router.history.push('/login')
    }
    render(){
        return (
            <div>
                <h1>Profile</h1>
                <button className="btn btn-danger" onClick={this.logout}>点击退出登录</button>
            </div>
        )
    }
}
Home.contextTypes = {
    router: PropTypes.object.isRequired
};
export default Home;