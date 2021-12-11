import React from 'react'
import Todo from './components/Todo'
import EditTodoList from './components/EditTodoList'
import {Routes,Route} from 'react-router-dom';

const App = () => {
  return (
    <>
     <Todo/>
      <Routes>     
      <Route path="/edit/:id">
        <EditTodoList />
      </Route>
      </Routes>
    </>
  )
}

export default App
