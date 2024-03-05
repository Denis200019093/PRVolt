import { filters } from "../utils/mocks"
import { FilterValues } from "../utils/types"
import { filterTodos } from "../redux/slices/todo-slice"
import { useAppDispatch, useAppSelector } from "../hooks/useRedux"

const Filters: React.FC = () => {
  const { filterBy } = useAppSelector((state) => state.todos)
  
  const dispatch = useAppDispatch()

  return (
    <aside className="flex items-center gap-2">
      {filters.map((filter) => 
        <button
          key={filter}
          className="px-2 py-1 rounded-md"
          style={{
            backgroundColor: filter === filterBy ? "rgb(74 222 128)" : "white",
          }}
          onClick={() => dispatch(filterTodos(filter as FilterValues))}
        >
          {filter}
        </button>
      )}
    </aside>
  )
}

export default Filters
