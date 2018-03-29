import React from 'react';

export default function(props){
    return <button className="btn btn-danger mt-5" onClick={()=>{
        localStorage.setItem('login','true');
        
        try{
            props.history.push(props.location.state.from);
        }catch(e){
            props.history.push('/home');
        }
    }}>点击此处登录</button>
}