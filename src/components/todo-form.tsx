import { Send } from "lucide-react"

import { useAppDispatch, useAppSelector } from "../hooks/useRedux"
import {
  createTodo,
  handleTodoText,
  resetTodoText,
} from "../redux/slices/todo-slice"

const TodoForm: React.FC = (): JSX.Element => {
  const { todoText, todos, limitTodos } = useAppSelector(
    (state) => state.todos
  )

  const dispatch = useAppDispatch()

  const submitNewTodo = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()

    if (!todoText) {
      return
    }

    if (todos.length >= limitTodos) {
      alert("You cannot create todo anymore. Limit (5)")
    }

    dispatch(createTodo({ id: Date.now(), value: todoText, completed: false }))
    dispatch(resetTodoText())
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(handleTodoText(e.target.value))
  }

  return (
    <div>
      <form className="flex items-center gap-2" onSubmit={submitNewTodo}>
        <input
          className="border-none outline-none grow h-12 rounded-md px-2"
          value={todoText}
          required
          placeholder="Todo value..."
          onChange={handleInputChange}
        />
        <button type="submit" className="bg-blue-400 h-12 px-3 rounded-md">
          <Send />
        </button>
      </form>
    </div>
  )
}

export default TodoForm
