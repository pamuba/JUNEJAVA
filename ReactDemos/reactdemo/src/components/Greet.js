//Class (state=values in the properties)
//funtion(hooks)
//JSX = JS -> XML
//rfce
import React from 'react'

function Greet({name, heroName}) {
    return (
        <div>
            <h1>Hello {name} aka {heroName}</h1>
        </div>
    )

    // return React.createElement('div',{id:"id", className:"dummy class"}, React.createElement('h1', null, "Hello World"))
}

export default Greet
