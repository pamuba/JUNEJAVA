import React from 'react';
import UpdatedComponent from './withCounter';

class ClickCounter extends React.Component {
    
    render() {
        const { count, incrementCount } = this.props
        return (
            <div>
                <button onClick={incrementCount}>Clicked {count} Times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ClickCounter)
