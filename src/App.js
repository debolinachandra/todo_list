import React from 'react'
import Todo from './components/Todo'
import EditTodoList from './components/EditTodoList'
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="main_div">
      <div className="child_div">
        <figure>
          <figcaption>Add your list here</figcaption>
        </figure>
        <div className="addItems">
        <input type="text" placeholder=" ✍️ Add Items"/>
         <i className="fa fa-plus add-btn"></i> 
          <Todo />
          <Routes>
            <Route path="/edit/:id">
              <EditTodoList />
            </Route>
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App
