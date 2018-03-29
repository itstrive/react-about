import React,{Component} from 'react';
import context from './Context'

export default class Title extends Component{
    render(){
        return (
            <context.Consumer>
                {
                    context=>(
                        <div>
                            <h3>{context.msg}</h3>
                            <button onClick={this.props.handleChange}>改变</button>
                        </div>
                    )
                }
            </context.Consumer>
            
        )
    }
}