export const addTodo=(data)=>{
    return{
        type:"ADD_TODO",
        payload:{
            id:new Date().getTime().toString(),
            data:data
        }
    }
}
export const deleteTodo=(id)=>{
    return{
        type:"DELETE_TODO",
        id

    }
}
export const removeTodo=()=>{
    return{
        type:"REMOVE_TODO"
    }
}

export const editTodo=(data)=>{
    return{
        type:"EDIT_TODO",
        payload:{
            data:data
        }

    }
}