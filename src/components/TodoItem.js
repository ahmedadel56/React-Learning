import React ,{useState}from "react"
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

const TodoItem = (props)=> {

    const completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through",
      };
      const { completed, id, title } = props.todo;
      const [state, setState] = useState({
        edit:false
      });
    

     const handleEditing = (e)=> {
        setState({...state,edit:true});
      }
      let viewMode = {}
      let editMode = {}

      if (state.edit) {
      viewMode.display = "none"
      } else {
      editMode.display = "none"
      }
     const handleUpdatedDone = event => {
        if (event.key === "Enter") {
          setState({ edit: false })
        }
      }
    return (
        <li className={styles.item}>
          <div onDoubleClick = {handleEditing} style={viewMode}>
            <input
              type="checkbox"
              className={styles.checkbox}
              checked={completed}
              onChange={() => props.handleChangeProps(id)}
            />
            <button onClick={() => props.deleteTodoProps(id)}>
            <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
            </button>
            <span style={completed ? completedStyle : null}>

            {title}
            </span>
          </div>

          <input type="text"
           style={editMode}
           className="textInput"
           value={title}
           onChange={e => {
            props.setUpdate(e.target.value, id)
          }}
          onKeyDown={handleUpdatedDone} />
        </li>
      )
  
}

export default TodoItem