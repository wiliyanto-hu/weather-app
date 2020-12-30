import {useState} from 'react';

function InputState (){
    const [state,setState] = useState('')

    const handleChange = (e) => setState(e.target.value)

    return[state,handleChange]
}

export default InputState;