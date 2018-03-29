import React from 'react';

import context from './Context'
import Title from './Title'

export default class Header extends React.Component{
    render(){
        return (
            <context.Consumer>
                {
                    context =>(
                        <div>
                            welcome React
                            <Title handleChange={this.props.handleChange} />
                        </div>
                    )
                }
            </context.Consumer>
            
        )
    }
}