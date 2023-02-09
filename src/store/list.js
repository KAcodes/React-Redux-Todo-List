import { createSlice } from "@reduxjs/toolkit";

//initial state of to do list, data has one starting object 
const initialToDoState = {
    nextId: 2, 
    data: 
    {
        1: {
            content: 'Content 1',
            completed: false
        }
    }
}


//create a slice, reducers must be able to 1) add another task, 2) delete a task 3) edit a task 4) change complete variable to true
export const listSlice = createSlice({
    name: 'currentList',

    initialState: initialToDoState,

    reducers: {
        //adds a new object into state with new description
        addTodo: (state, action) => {
            
            state.data = {
                
                ...state.data, 
                [state.nextId]: {
                    content: action.payload,
                    completed: false
                } 
            }

            state.nextId++
        },

        //delete object from state
        deleteTask: (state, action) => {
            delete state.data[action.payload]
        },

        //content of task changes, and new key called update is passed true value
        editTask: (state, action) => {

            document.getElementById('inputTask').value = state.data[action.payload].content;

            document.getElementById('submitBtn').innerText = 'Update'

            state.data[action.payload].update = true
            
        },

        //obtaining all key value pairs in data object within state 
        //this is mapped through and if update key is true then new description is given to task in state
        update: (state, action) => {
            let taskList = Object.entries(state.data);
            taskList.forEach((task) => {
                if (task[1].update) {
                    task[1].content = action.payload;
                    delete task[1].update;
                    document.getElementById('submitBtn').innerText = 'Add';
                }
            })
        },

        taskCompleted: (state, action) => {
             state.data[action.payload].completed = !state.data[action.payload].completed; 
        },
    }

});

export const {addTodo, deleteTask, editTask, update, taskCompleted} = listSlice.actions;

export default listSlice.reducer;