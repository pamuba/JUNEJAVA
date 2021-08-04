import axios from 'axios'
import React, { Component } from 'react'

export class PostForm extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            userId:'',
            title:'',
            body:''
        }
    }

    changeHandler = (e)=>{
        this.setState({
                [e.target.name]: e.target.value
            })
        }
    submitHandler = e => {
        e.preventDefault();
        console.log(this.state)
        axios.post('https://jsonplaceholder.typicode.com/photos', this.state)
            .then(response=>{
                console.log(response)
            })
            .catch(er=>{
                console.log(er)
            })
    }
    render() {
        const {userId, title, body} = this.state
        return (
            <>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <input type="text" name="userId" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="title" onChange={this.changeHandler} />
                    </div>
                    <div>
                        <input type="text" name="body" onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </>
        )
    }
}

export default PostForm
