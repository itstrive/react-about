import React,{Component} from 'react';

import filterTypes from './filter-types'

class TodoFooter extends Component{
    render(){
        let {
            unCompletedCount, 
            currentFilterType,
            completedCount
        } = this.props;
        return (
            <div className="card-footer text-center">
                <div className="row">
                    <div className="col-md-2 col-sm-2">
                        {
                            unCompletedCount===0
                                ?null:
                            <button type="button" className="btn btn-link btn-sm">
                                还有 <span className="badge badge-light">{unCompletedCount}</span>
                                代办事情
                            </button>
                        }
                    </div>
                    <div className="col-md-8 col-sm-8">
                        <button 
                            className={`btn btn-sm ${currentFilterType===filterTypes.ALL?'btn-success':'btn-default'}`} 
                            onClick={()=>this.props.changeFilterType(filterTypes.ALL)}>
                        全部</button>
                        <button 
                            className={`btn btn-sm ${currentFilterType===filterTypes.UNCOMPLETED?'btn-success':'btn-default'}`} style={{margin:'0 20px'}} 
                            onClick={()=>this.props.changeFilterType(filterTypes.UNCOMPLETED)}>
                        未完成</button>
                        <button 
                            className={`btn btn-sm ${currentFilterType===filterTypes.COMPLETED?'btn-success':'btn-default'}`}
                            onClick={()=>this.props.changeFilterType(filterTypes.COMPLETED)}>
                        已完成</button>
                    </div>
                    <div className="col-md-2 col-sm-2">
                        {
                            completedCount>0?<button className="btn btn-danger btn-sm" onClick={this.props.delCompleted}>删除已完成</button>:null
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default TodoFooter;