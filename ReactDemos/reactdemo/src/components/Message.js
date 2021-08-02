import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super()
    
        this.state = {
             message:'Welcome Home'
        }
    }
    changeMessage(){
        this.setState({
            message : 'Welcome Back'
        })
    }
    render() {
        return (
            <div>
                <h1>{this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>CHANGE</button>
            </div>
        )
    }
}

export default Message
