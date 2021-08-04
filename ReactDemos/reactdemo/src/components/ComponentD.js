import React, { Component } from 'react'
import ComponentE from './ComponentE'
import { UserConsumer } from './UserContext'

class ComponentD extends Component {
    render() {
        return (
            <UserConsumer>
                {
                    (username)=>{
                        return <>Hello {username}</>
                    }
                }
            </UserConsumer>
        )
    }
}

export default ComponentD
