import React from 'react';
import {useSelector} from 'react-redux';
import Task from './Task';
import 'bootstrap/dist/css/bootstrap.min.css';

const CurrentTasks = () => {

    //state is stored in variable and all the key value pairs within data object of state are stored as tasklist variable
    const allTaskData = useSelector((state) => state.lists);
    const taskList = Object.entries(allTaskData.data);   

    //every object in tasklist is mapped into a new task component using props passed down
    return(
        <table className='table'>
            <thead className="thead-dark">
            <tr>
                <th scope="col">Description</th>
                <th scope="col">Completed</th>
                <th scope="col">Actions</th>
            </tr>
            </thead>
            <tbody>
                {taskList.map((task) => 
                <Task id={task[0]} key={task[0]} task={task}/>
                )}
            </tbody>
        </table>
    )
}

export default CurrentTasks;