import { useState } from "react";

import { CreateTodo } from 'src/features/createTodo';
import { ClearCompletedButton } from "src/features/clearCompleted";

import { TodoCollapse } from "src/widgets/todoCollapse";
import { TodoFilterList } from "src/widgets/todoFilterList";


export const Main = () => {
  const [activeKeys, setActiveKeys] = useState(['1']);

  return (
    <div className="pt-32">
      <h1 className="text-8xl font-extralight text-center text-red-300 mb-8">
        todos
      </h1>
      
      <div className="bg-white flex flex-col">
        <CreateTodo />
        <TodoCollapse activeKeys={activeKeys} setActiveKeys={setActiveKeys} />

        <div className="flex justify-between items-center p-4 text-gray-500 border-t-2 border-gray-200">  
          <TodoFilterList activeKey={activeKeys[0]} setActiveKey={(key) => setActiveKeys([key])} />
          <ClearCompletedButton />
        </div>
      </div>
    </div>
  );
};
