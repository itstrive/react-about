import React,{Component} from 'react';
import {Prompt} from 'react-router-dom';

class UserAdd extends Component{
    constructor(props){
        super(props);
        this.state = {
            blocking:false
        };
    }
    handleSubmit = (ev) =>{
        let userName = this.input.value;

        //从缓存里面读取
        let userStr = localStorage.getItem('users');
        let userArr = userStr ? JSON.parse(userStr):[];
        userArr.push({
            id:Math.random(),
            userName
        });

        localStorage.setItem('users',JSON.stringify(userArr));

        ev.preventDefault();

        this.input.value = '';

        this.setState({
            blocking:false
        },()=>{
            //路由跳转
            this.props.history.push('/user/list');
        });
    }
    handleChange = (ev) =>{
        this.setState({
            blocking:ev.target.value && ev.target.value.length>0
        });
    }
    render(){
        return (
            <div>
                <Prompt
                    when={this.state.blocking}
                    message={(location)=>`您确定要跳转到${location.pathname}么?`}
                />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <input onChange={this.handleChange} ref={input=>this.input=input} placeholder="请输入姓名..." type="text" className="form-control"/>
                    </div>
                    <div className="form-group">
                        <button className="btn btn-primary">添加</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default UserAdd;