import { Button, Input } from 'antd';
import React, { useState } from 'react'
import { useTodosStore } from 'src/app/store/todos';
import { v4 as uuidv4 } from 'uuid'; 

export const CreateTodo = () => {
  const [inputValue, setInputValue] = useState<string>('');
  const createTodo = useTodosStore((state) => state.createTodo);

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleCreateTodo = () => {
    createTodo(
    {
      id: uuidv4(),
      value: inputValue,
      isCompleted: false,
    });
    setInputValue('');
  };

  return (
    <form className="flex border-b-2 border-gray-200 p-2">
      <Input 
        placeholder="What needs to be done?" 
        value={inputValue} 
        onChange={handleChangeInput}
        variant="borderless" 
        size="large" 
        type="text"
      />
      {inputValue && <Button htmlType='submit' onClick={handleCreateTodo}>Create</Button>}
    </form>
  );
};
