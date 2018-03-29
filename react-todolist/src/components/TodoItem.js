import React,{Component} from 'react'

class TodoItem extends Component{
    render(){
        const {
            title, 
            completed, 
            id
        } = this.props.todo; //注意函数不要解构

        return (
            <li className="list-group-item">
                <div className="row">
                    <div className="col-md-1 col-sm-1"><input type="checkbox" checked={completed} onChange={()=>this.props.toggleChange(id)}/></div>
                    <div className="col-md-10 col-sm-10">
                        <p style={{textDecoration:completed?'line-through':''}}>{title}</p>
                    </div>
                    <div className="col-md-1 col-sm-1">
                        <input type="button" value="×" onClick={()=>this.props.handleDelete(id)} className="btn btn-danger btn-sm"/>
                    </div>
                </div>
            </li>
        )
    }
}

export default TodoItem;