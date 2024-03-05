import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { FilterValues, Todo } from "../../utils/types"

interface InitialState {
  todoText: string
  limitTodos: number
  filterBy: FilterValues
  todos: Todo[]
  filteredTodos: Todo[]
}
const initialState: InitialState = {
  todoText: "",
  filterBy: "all",
  limitTodos: 5,
  todos: [],
  filteredTodos: [],
}

const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    getTodos: (state) => {
      const originalCopy = [...state.todos]

      const filteredResult = originalCopy.filter((todo) => {
        if (state.filterBy === "completed") {
          return todo.completed
        } else if (state.filterBy === "uncompleted") {
          return !todo.completed
        } else {
          return todo
        }
      })

      state.filteredTodos = filteredResult
    },
    createTodo: (state, action: PayloadAction<Todo>) => {
      if (state.todos.length >= state.limitTodos) {
        return
      }

      state.todos = [action.payload, ...state.todos]
      state.filteredTodos = state.todos
    },
    handleTodoText: (state, action: PayloadAction<string>) => {
      state.todoText = action.payload
    },
    resetTodoText: (state) => {
      state.todoText = ""
    },
    toggleTodoStatus: (state, action: PayloadAction<number>) => {
      const result = state.todos.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      )

      state.todos = result
      state.filteredTodos = result
    },
    filterTodos: (state, action: PayloadAction<FilterValues>) => {
      state.filterBy = action.payload
    },
  },
})

export const {
  getTodos,
  createTodo,
  handleTodoText,
  toggleTodoStatus,
  resetTodoText,
  filterTodos,
} = todoSlice.actions
export default todoSlice.reducer
