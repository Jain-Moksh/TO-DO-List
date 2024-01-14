import React, { useState } from "react";
import TodoList from "./todo.jsx";

function App() {
    const [ip, setIp] = useState("");
    const [tasks, setTasks] = useState([]);

    function handleChange(event) {
        const val = event.target.value;
        setIp(val);
    }

    function handleAdd() {
        setTasks((prev) => {
            return [...prev, ip];
        });

        setIp(" ");
    }

    function handleDelete(id){

        setTasks((prev)=>{
            return prev.filter((name,index) => {
                return index !== id;
            });
        });

    }


    return (
        <div className="container">
            <div className="heading">
                <h1>To-Do List</h1>
            </div>

            <div className="form">
                <input value={ip} type="text" onChange={handleChange} />
                <button onClick={handleAdd}> <span>Add</span> </button>
            </div>

            <div>
                {tasks.map((task,index) => {
                    return(
                        <TodoList key={index} id={index} name={task} onClicked={handleDelete} />
                    );
                })}
            </div>

        </div>
    )
}

export default App;