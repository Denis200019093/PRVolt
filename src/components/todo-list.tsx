import { useEffect } from "react"

import TodoItem from "./todo-item"
import { getTodos } from "../redux/slices/todo-slice"
import { useAppDispatch, useAppSelector } from "../hooks/useRedux"

const TodoList: React.FC = () => {
  const { todos, filterBy, filteredTodos } = useAppSelector(
    (state) => state.todos
  )

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(getTodos())
  }, [dispatch, filterBy, todos])

  return (
    <div className="flex flex-col gap-4">
      {filteredTodos.map((todo) => 
        <TodoItem key={todo.id} todo={todo} />
      )}
    </div>
  )
}

export default TodoList
