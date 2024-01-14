import React, { useState } from "react";

function TodoList(props) {
    return (
        <div
            onClick={() => {
                props.onClicked(props.id);
            }}>

            <li>{props.name}</li>
        </div >
    )
}

export default TodoList;

