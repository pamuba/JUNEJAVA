import React, {useState} from 'react'

function UseStates() {
    const [count, setCount] = useState(10)
    return (
        <div>
            <button onClick={()=>setCount(count + 1)}>Count: {count}</button>
            <button onClick={()=>setCount(count - 1)}>Count: {count}</button>
        </div>
    )
}

export default UseStates
