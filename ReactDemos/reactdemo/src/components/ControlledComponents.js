import React, { Component } from 'react'

class ControlledComponents extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             comments:'',
             topic:'angular'
        }
    }

    handler = (event) => {
        this.setState({
            username:event.target.value
        })
    }
    handlerComments = (event) => {
        this.setState({
            comments:event.target.value
        })
    } 
    
    handlerTopics = (event) =>{
        this.setState({
            topic:event.target.value
        })
    }

    handlerSubmit=(event)=>{
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
    }
    render() {
        return (
            <form onSubmit={this.handlerSubmit}>
            <div>
                <label>UserName</label>
                <br></br>
                <input type="text" onChange={this.handler} value={this.state.username}/>
            </div>
            <div>
                <label>Comments</label>
                <br></br>
                <textarea value={this.state.comments} onChange={this.handlerComments}></textarea>
            </div>
            <div>
                <label>Topics</label>
                <br></br>
                <select value={this.state.topic} onChange={this.handlerTopics}>
                    <option value="react">React</option>
                    <option value="angular">Anglar</option>
                    <option value="vuejs">Vuejs</option>
                </select>
            </div>
            {/* preventDefault */}
            <button type="submit">Submit</button>
            </form>
            
        )
    }
}

export default ControlledComponents
