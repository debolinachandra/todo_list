import React, { useState } from 'react'
import './todo.css';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo, deleteTodo, removeTodo } from '../actions/index'

const Todo = () => {

const [inputData, setInputData] = useState('');
const list = useSelector((state) => state.todoReducers.list);
const dispatch = useDispatch();
return (
<>
    <div className="main-div">
        <div className="child-div">
            <figure>
                <figcaption>Add your list here</figcaption>
            </figure>
            <div className="addItems">
                <input type="text" placeholder="Add items" value={inputData} onChange={(e) => setInputData(e.target.value)} />
                <i className="fa fa-plus add-btn" onClick={() => dispatch(addTodo(inputData), setInputData(''))}></i>
            </div>

            <div className="showItems">
                {
                    list.map((elem) => (
                        <div className="eachItems" key={elem.id}>
                            <h3>{elem.data}</h3>
                            <div className="todo-btn">
                                <i className="fa fa-trash-alt add-btn" title="delete item" onClick={() => dispatch(deleteTodo(elem.id))}></i>
                            </div>
                        </div>
                    ))
                }
            </div>
             <div className="showItems">
                 <button className="btn effect04" data-sm-link-text="remove All" onClick={()=>dispatch(removeTodo())}><span>Remove All</span></button>
             </div>   
        </div>
    </div>

</>
)
}

export default Todo
