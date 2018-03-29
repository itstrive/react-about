class StoreModel{
    constructor(){
        this.KEY='todos';
        this.todos=JSON.parse(localStorage.getItem(this.KEY)) || [];

        this.listeners = [];
    }
    subscribe = (listener) =>{ //把需要监听的函数封装进去
        this.listeners.push(listener);
    }
    publish = () =>{ //监听只要数据变化，执行函数，相应的外面也就渲染
        this.listeners.forEach(listener=>listener());
    }
    notify = (todos) =>{
        this.todos = todos;
        //存储到localStorage里面
        localStorage.setItem(this.KEY, JSON.stringify(todos));
        //this.setState({todos});
        this.publish();
    }
    //删除某一条
    handleDelete = (id) =>{
        let todos = this.todos
        todos = todos.filter(todo=>todo.id!==id);
        this.notify(todos);
    }
    //添加
    addTodo=(todo)=>{ //这里一定要用箭头函数，要不this会有问题
        let todos = this.todos;
        todo = {id:Math.random(), completed:false, ...todo};
        todos.push(todo);
        this.notify(todos);
    }
    //删除已完成的任务
    delCompleted = () =>{
        let todos = this.todos;
        todos = todos.filter(todo=>{
            return !todo.completed;  //返回没有完成的
        });

        this.notify(todos);
    }
    //切换
    toggleChange = (id) =>{
        let todos = this.todos.map(todo=>{
            if(todo.id===id){
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.notify(todos);
    }
    //全选、取消全选
    toggleAll = (input) =>{
        let checked = input.checked;
        let todos = this.todos;
        todos = todos.map(todo=>{
            todo.completed = checked;
            return todo;
        });
        this.notify(todos);
    }
}

export default StoreModel;