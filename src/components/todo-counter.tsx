import { useMemo } from "react"
import { CheckCircle2, XCircle } from "lucide-react"

import { useAppSelector } from "../hooks/useRedux"

const TodoCounter: React.FC = () => {
  const { todos, limitTodos } = useAppSelector((state) => state.todos)

  const numberOfCompleted = useMemo(() => {
    const completedTodos = todos.filter((todo) => todo.completed)
    return completedTodos.length
  }, [todos])

  const numberOfUncompleted = useMemo(() => {
    const uncompletedTodos = todos.filter((todo) => !todo.completed)
    return uncompletedTodos.length
  }, [todos])

  return (
    <div className="flex justify-between items-center bg-white p-3 rounded-md grow">
      <div className="flex items-center gap-6">
        <h6 className="flex items-center text-green-600 gap-2 text-xl">
          <CheckCircle2 />
          {numberOfCompleted}
        </h6>
        <h6 className="flex items-center text-gray-500 gap-2 text-xl">
          <XCircle />
          {numberOfUncompleted}
        </h6>
      </div>
      <div
        className="text-2xl font-semibold"
        style={{
          color: todos.length >= limitTodos ? "rgb(239 68 68)" : "black",
        }}
      >
        {todos.length}/{limitTodos}
      </div>
    </div>
  )
}

export default TodoCounter
