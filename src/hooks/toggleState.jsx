import {useState} from 'react';

function ToggleState (init=false){
    const [state,setState] = useState(init)

    const toggle = () => setState(!state)

    return[state,toggle]
}

export default ToggleState;