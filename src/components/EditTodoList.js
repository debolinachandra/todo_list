import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom'
import { editTodo } from '../actions/index'


const EditTodoList = () => {
    const [data, setData] = useState("");
    const { id } = useParams();
    const list = useSelector((state) => state.todoReducers.list);
    const dispatch = useDispatch();
    const currentItem = list.find(item => item.id === parseInt(id))

    useEffect(() => {
        if (currentItem) {
            setData(currentItem);    
        }
    }, [currentItem]);


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(editTodo(data));      
    };


    return (
        <div className="main-div">
            {
                currentItem ?
                    (
                        <>

                            <div className="row">
                                <div className="col-md-6 shadow mx-auto p-5">
                                    <form onSubmit={handleSubmit}>
                                        <div className="addItems">
                                            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                                        </div>

                                    </form>
                                </div>
                            </div>

                        </>
                    )
                    : (
                        <>
                            <h1 className="display-3 my-5 text-center">list item with id{id} not exists</h1>
                        </>
                    )
            }
        </div>
    )
}

export default EditTodoList
