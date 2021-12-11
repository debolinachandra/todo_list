
const intialState = {
    list: []
}
// const[list,setList]=useState([]);

const todoReducers = (state = intialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            const { id, data } = action.payload;
            return {
                ...state,
                list: [
                    ...state.list,
                    {
                        id: id,
                        data: data
                    }
                ]
            }
        case "DELETE_TODO":
            const newlist = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newlist
            }
        case "REMOVE_TODO":
            return {
                ...state,
                list: []
            }

        case "EDIT_TODO":
            const newlist = state.list.map(elem => elem.id == action.payload.id ? action.payload : list)
            return {
                ...state,
                list:newlist
            }
        default: return state;
    }
}
export default todoReducers;