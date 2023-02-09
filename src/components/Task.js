import { useDispatch } from "react-redux";
import { deleteTask, editTask, taskCompleted} from '../store/list';




const Task = (props) => {
        
    
    const dispatch = useDispatch()
    return (
        <tr className="myRow">
            <td>{props.task[1].content}</td>
            <td>{props.task[1].completed ? 'Completed' : 'Not Completed'} </td>
            <td>
                <button type="button" className="btn btn-primary btn-sm myBtn" onClick={() => {dispatch(deleteTask(props.id))}}>Delete</button>
                <button type="button" className="btn btn-primary btn-sm myBtn" onClick={() => {dispatch(editTask(props.id))}}>Edit</button>
                <button type="button" className="btn btn-primary btn-sm myBtn" onClick={() => {dispatch(taskCompleted(props.id))}}>Mark as Completed</button>
            </td>
        </tr>   
    )
}

export default Task; 