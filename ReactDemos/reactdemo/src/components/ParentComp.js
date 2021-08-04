import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'

export class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name:"React Demos"
        }
    }
    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: "React Demos"
            })
        }, 2000)
    }
    
    render() {
        console.log("*********************Parent Component********************")
        return (
            <div>
                Parent Component<br>
                </br>
                <PureComp name={this.state.name}></PureComp>
                <RegComp name={this.state.name}></RegComp>
            </div>
        )
    }
}

export default ParentComp
