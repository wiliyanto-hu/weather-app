import {useState, useEffect} from 'react'

function LocalStorageState(key, initialValue) {
    const[state, setState] = useState(()=> {
        let val
        try{
            val = JSON.parse(localStorage.getItem('key')) || String(initialValue)
        }
        catch{
            val= initialValue
        }
        return val;

    
    })
    useEffect(()=> {
        localStorage.setItem(key, JSON.stringify(state))
    },[state])

    return [state,setState]
}
export default LocalStorageState