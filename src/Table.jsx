import React from 'react'
import Row from './Row.jsx'
function Table (){
    
    return(
        <table style={{border:'1px solid black', margin: '2rem auto', }}>
            <tr>
            <th>TEXT</th>
            <th>BUTTON</th>
            </tr>
            <Row text="Hello World" />
            <Row text="Hola Mundo" />
            <Row text="Bonjour le monde" />
        </table>
    )

}
export default Table;