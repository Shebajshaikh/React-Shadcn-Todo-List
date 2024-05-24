import React, {useState} from 'react'

import { Button } from '../Pages/components/ui/button';
import {  Form } from  '../Pages/components/ui/form';
import { Input } from '../Pages/components/ui/input';

export const TodoForm = ({addTodo}) => {
    const [value, setValue] = useState('');

    const handleSubmit = (e) => {
     
        e.preventDefault();
        if (value) {
        
          addTodo(value);
       
          setValue('');
        }
      };
  return (

 <Form>
      <form onSubmit={handleSubmit} className=" flex items-center" >
      <Input  type="text" value={value} onChange={(e) => setValue(e.target.value)} className=" placeholder-white::placeholder focus:outline-none bg-transparent border border-green-500 px-4 py-2 mt-4 mb-8 w-72 text-white mr-4 mt-9" placeholder =" Enter Your Task " />
      <Button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">AddTask</Button> 
                
      </form>
    </Form>
  )
}