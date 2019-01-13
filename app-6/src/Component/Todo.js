import React, {Component} from 'react';

const Todo = (props) => {

   let list = props.list.map((e,i) => {
        return <li key={i} >{e}</li>
    })



    return(
        <div>
            <h1>{props.title}</h1>
            <ul>
                {list}
            </ul>

        </div>
        
    )
}

export default Todo;