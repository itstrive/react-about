import React,{Component} from 'react';

class TodoCheckAll extends Component{
    render(){
        let {unCompletedCount} = this.props;
        return (
            <li className="list-group-item">
                <label htmlFor="checkall">
                    <input type="checkbox" ref={input=>this.input=input} id="checkall" checked={unCompletedCount===0} onChange={()=>this.props.toggleAll(this.input)}/>
                    {unCompletedCount===0?'取消全选':'全部选中'}
                </label>
            </li>
        )
    }
}

export default TodoCheckAll