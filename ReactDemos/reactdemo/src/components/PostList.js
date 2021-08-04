import React, { Component } from 'react'
import axios from 'axios'

class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             posts:[],
             errorMessage:''
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/photosabc')
            .then(response => {
                console.log(response)
                this.setState({posts:response.data})
            })
            .catch((err)=>{
                console.log(err)
                this.setState({errorMessage:'Error Retreiving data'})
            })
    }
    
    render() {
        const {posts, errorMessage} = this.state
        return (
            <div>
                List of Posts
                {
                    posts.length ?
                    posts.map(post => <div key={post.id}>{post.title}</div>):null
                }
                {
                    errorMessage? <h3>{errorMessage}</h3>: null
                }
            </div>
        )
    }
}

export default PostList
