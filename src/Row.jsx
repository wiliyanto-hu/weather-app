import React from 'react'
import {CopyToClipboard} from 'react-copy-to-clipboard'

function Row ({text}){
    return(
        <tr>
            <td>{text}</td>
            <td><CopyToClipboard text={text}><button>Copy</button></CopyToClipboard></td>
        </tr>
    )

}
export default Row;