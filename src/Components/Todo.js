import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { Card } from '../Pages/components/ui/card';


export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (

    <Card className="flex justify-between items-center bg-teal-600 text-white py-3 px-4 rounded-md mb-4">
      <p className={`${task.completed ? "completed" : "incompleted"}`}>{task.task} </p>
        <div>
        <FontAwesomeIcon className="cursor-pointer m-1" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
        <FontAwesomeIcon className="cursor-pointer m-1 " icon={faTrash} onClick={() => deleteTodo(task.id)} />
        <FontAwesomeIcon className="cursor-pointer m-1" icon={faCheckSquare} onClick={() => toggleComplete(task.id)} />
      </div>
    </Card>
  )
}