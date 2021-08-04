import React from 'react'
import UpdatedComponent from './withCounter'

export class HoverCounter extends React.Component {

    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <h2 onMouseOver={incrementCount}>Hovered {count} Times</h2>
            </div>
        )
    }
}

export default UpdatedComponent(HoverCounter)
