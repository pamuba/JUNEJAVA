import React, {useState, useEffect} from 'react'

function HookCounterOne() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    
    useEffect(()=>{
        console.log('useEffect - Updating the document title')
        document.title = `You Clicked ${count} times`
    }, [count])
    return (
        <>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={()=> setCount(count +1)}>Click {count} times</button>
        </>
    )
}

export default HookCounterOne
