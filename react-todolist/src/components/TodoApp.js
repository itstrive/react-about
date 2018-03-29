import React from 'react';

import TodoHeader from './TodoHeader'
import TodoItem from './TodoItem'
import TodoFooter from './TodoFooter'
import TodoCheckAll from './TodoCheckAll'
import filterTypes from './filter-types'

class TodoApp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            todos:[],
            filterType:filterTypes.ALL
        };
    }
    
    changeFilterType = (filterType) =>{
        this.setState({filterType})
    }

    render(){
        let todos = this.props.store.todos;
        let unCompletedCount = todos.reduce((count,todo)=>count+(todo.completed?0:1),0); //统计未完成任务的数量
        let completedCount = todos.length - unCompletedCount;

        let filterTodos = todos.filter(todo=>{
            switch(this.state.filterType){
                case filterTypes.UNCOMPLETED:
                    return todo.completed===false;
                case filterTypes.COMPLETED:
                    return todo.completed===true;
                default:
                    return true;
            }
        });

        const bodyMain = (<div className="card-body">
            <ul className="list-group list-group-flush">
                {
                    todos.length > 0 ? 
                    <TodoCheckAll unCompletedCount={unCompletedCount} toggleAll={this.props.store.toggleAll} />
                    : null
                }
                
                {
                    filterTodos.map((todo,index)=>
                        <TodoItem 
                            key={index} 
                            todo={todo}
                            toggleChange={this.props.store.toggleChange}
                            handleDelete={this.props.store.handleDelete}
                        ></TodoItem>
                    )
                }
            </ul>
        </div>);
        return (<div className="container" style={{marginTop:'30px'}}>
            <div className="card">
                <TodoHeader addTodo ={this.props.store.addTodo} />
                {bodyMain}
                <TodoFooter unCompletedCount={unCompletedCount} changeFilterType={this.changeFilterType} currentFilterType={this.state.filterType} delCompleted={this.props.store.delCompleted} completedCount={completedCount} />
            </div>
        </div>)
    }
}

export default TodoApp;
