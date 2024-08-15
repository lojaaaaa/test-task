import { Checkbox, CheckboxProps } from "antd"
import { ITodo, useTodosStore } from 'src/app/store/todos';


export const TodoItem = ({ id, value, isCompleted }: ITodo) => {
  const setTodoStatus = useTodosStore((state) => state.setTodoStatus);

  const handleChangeStatus: CheckboxProps['onChange'] = (e) => {
    setTodoStatus(id, Boolean(e.target.checked));
  };

  return (
    <li className="px-2 py-4 border-b border-gray-200" key={id}>
      <Checkbox className="text-lg" checked={isCompleted} onChange={handleChangeStatus}>
        { 
          !isCompleted 
            ? value
            : <span className="line-through">{value}</span>
          }
      </Checkbox>
    </li>
  )
}
