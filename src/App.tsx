import Filters from "./components/filters"
import TodoCounter from "./components/todo-counter"
import TodoForm from "./components/todo-form"
import TodoList from "./components/todo-list"

const App: React.FC = () => {
  return (
    <main>
      <section className="flex flex-col gap-4 max-w-xl mx-auto mt-20 p-10 rounded-md bg-slate-100">
        <TodoForm />
        
        <hr className="my-3" />

        <TodoCounter />
        <Filters />
        <TodoList />
      </section>
    </main>
  )
}

export default App
