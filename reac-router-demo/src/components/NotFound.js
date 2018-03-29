import React from 'react';

class NotFound extends React.Component{
    constructor(){
        super();
        this.state = {
            count:5
        };
    }
    componentDidMount(){
        this.timer = setInterval(()=>{
            let n = this.state.count;
            this.setState({
                count:n-1
            });
            if(n===1){
                this.props.history.push('/home');
            }
        },1000)
    }
    componentWillUnmount(){
        clearInterval(this.timer);
    }
    render(){
        return (
            <h2>404页面没找到 {this.state.count}s</h2>
        )
    }
}
export default NotFound;
/* export default function(props){
    console.log(props);
    return (
        <h2>404页面没找到</h2>
    )
} */