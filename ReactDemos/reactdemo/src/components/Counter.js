import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             count:0
        }
    }
    increment(){
        //setState is async
        // this.setState({
        //     count : this.state.count + 1
        // }, () =>  console.log("Callback Value:"+ this.state.count))
        // console.log(this.state.count)

        this.setState(prevSate => ({
            count:prevSate.count + 1
        }))
    }
    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render() {
        return (
           <>
                <div>
                    Count - {this.state.count}
                </div>
                <button onClick={()=>this.incrementFive()}>Increment</button>
           </>
        )
    }
}

export default Counter
