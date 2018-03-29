import React from 'react';
import context from './Context'
import Header from './Header'

class App extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            msg:'welcome'
        };
    }
    handleChange = ()=>{
        let msg = Date.now();
        this.setState({msg});
    }
    render(){
        return (
            <context.Provider value={this.state}>
                <Header handleChange={this.handleChange} />
            </context.Provider>
        )
    }
}

export default App;
