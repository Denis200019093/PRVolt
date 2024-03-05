import { Todo } from "../utils/types"
import { useAppDispatch } from "../hooks/useRedux"
import { toggleTodoStatus } from "../redux/slices/todo-slice"

interface TodoProps {
  todo: Todo
}

const TodoItem: React.FC<TodoProps> = ({ todo }) => {
  const dispatch = useAppDispatch()

  const handleTodoStatus = (): void => {
    dispatch(toggleTodoStatus(todo.id))
  }

  return (
    <div
      onClick={handleTodoStatus}
      className="p-4 rounded-md bg-white cursor-pointer transition-all active:scale-[.98]"
    >
      <h6 className={`${todo.completed ? "line-through" : ""}`}>
        {todo.value}
      </h6>
    </div>
  )
}

export default TodoItem
