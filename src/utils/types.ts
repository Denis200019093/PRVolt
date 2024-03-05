export interface Todo {
  id: number
  value: string
  completed: boolean
}

export type FilterValues = "completed" | "uncompleted" | "all"
