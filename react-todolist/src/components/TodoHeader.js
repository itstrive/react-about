import React,{Component} from 'react'

class TodoHeader extends Component{
    addMsg = () =>{
        let value = this.input.value;
        if(!value)return;
        this.props.addTodo({title:value});
        this.input.value = '';
    }
    handleKeyUp = (ev) =>{
        if(ev.keyCode === 13){
            this.addMsg();
        }
    }
    handleClick = () =>{
        this.addMsg();
    }
    render(){
        return (
            <div className="card-header">
                <div className="row">
                    <div className="col-md-10 col-sm-10">
                        <input type="text" onKeyUp={this.handleKeyUp} ref={(input)=>this.input=input} className="form-control" placeholder="请输入要添加的任务"/>
                    </div>
                    <div className="col-md-2 col-sm-2">
                        <input type="button" onClick={this.handleClick} className="btn btn-info" value="添加"/>
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoHeader;