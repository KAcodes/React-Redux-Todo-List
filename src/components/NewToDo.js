import React from 'react';
import {useDispatch} from 'react-redux';
import { addTodo, update } from '../store/list';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const NewToDo = () => {

    //useState sets description of task 
    const [description, setDescription] = useState('');

    //dispatch gets reducers from slice
    const dispatch = useDispatch();

    //when input is submitted, a new task is added or if edit has been clicked then that current tasks description is updated with input value
    const taskHandler = (e) => {
        e.preventDefault();
        let buttonText = document.getElementById('submitBtn');
        buttonText.innerText === 'Add' ? dispatch(addTodo(description)) : dispatch(update(description));;
        setDescription('')
    }

    return (
        <>
        <h1>My To Do List</h1>
        <form onSubmit={taskHandler}>
           <label></label>
           <input 
             id='inputTask'
             name='description'
             value={description}
             onChange={(e) => setDescription(e.target.value)}
           />
           <button type="submit" className="btn btn-primary myBtn" id='submitBtn' >Add</button>
        </form>
        </>
    )
};


export default NewToDo;