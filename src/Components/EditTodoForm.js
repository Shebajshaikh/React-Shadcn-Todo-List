import React, {useState} from 'react'
import { Button } from '../Pages/components/ui/button';
import {  Form } from  '../Pages/components/ui/form';
import { Input } from '../Pages/components/ui/input';

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task);

    const handleSubmit = (e) => {
      // prevent default action
        e.preventDefault();
        // edit todo
        editTodo(value, task.id);
      };
  return (

    
 <Form>
 <form onSubmit={handleSubmit} className="flex items-center">
  <Input  type="text" value={value} onChange={(e) => setValue(e.target.value)} className="focus:outline-green bg-none border-2 border-green-700 px-4 py-2 mt-4 mb-8 w-72 text-white" placeholder="how are you "/>
  <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mb-4  ml-5">Save</Button>

  
           
 </form>
</Form>
   
  )
}