import { useState } from 'react'
import TaskList from './components/TaskList'
import { tlist } from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState(tlist)

  const tasksCompleteList = tasks.filter(i => i.isComplete)
  const tasksUncompleteList = tasks.filter(i => !i.isComplete)

  const changeState = (id) => {
    const copy = [...tasks]
    const finded = copy.find(item => item.id === id)
    finded.isComplete = !finded.isComplete
    setTasks(copy)
  }

  const removeTask = (id) => {
    const copy = [...tasks]
    const finded = copy.filter(i => i.id !== id)
    setTasks(finded)
  }

  const addTask = (e) => {
    e.preventDefault();
    if(newTaskv.length >= 1)
    {
    const newTask = {
      id: Date.now(),
      title: newTaskv,
      isComplete: false
    }
    setTasks([...tasks, newTask])
  }
    setNewtaskv('')
  }

  const [newTaskv, setNewtaskv] = useState('')

  return (
    <div className='bg-zinc-900 h-full w-screen box-border'>

      <div className='bg-zinc-900 min-h-screen mx-auto font-Inter text-white px-[5%] grid grid-rows-[min-content_min-content_1fr_min-content]'>
        <h1 className='w-full text-indigo-400 font-bold text-2xl font-Inter text-center pt-5 mb-5 underline decoration-wavy decoration-white'>TODO LIST</h1>
        
        <div className='w-full'>
          <h2 className='w-[90%] sm:w-[576px] mx-auto mb-4 font-semibold text-sm'>Tasks - {tasksUncompleteList.length}</h2>
          <TaskList list={tasksUncompleteList} remove={removeTask} change={changeState}/>
        </div>

        <div>
          <form action="" className='w-full sm:w-[576px] h-10 mx-auto flex justify-center mb-9'>
            <input maxLength = "64" onChange={e => setNewtaskv(e.target.value)} value={newTaskv} placeholder='Write your task here..' type="text" className='caret-indigo-400 mr-4 w-full rounded-lg bg-zinc-700 text-xs px-4'/>
            <button onClick={addTask} className='hover:text-indigo-400 rounded-lg bg-zinc-800 w-[100px] h-full text-xs font-semibold'>Add</button>
          </form>
        </div>
        
        <div >
          {tasksCompleteList.length > 0 
          ? <h2 className='w-[90%] sm:w-[576px] mx-auto mb-4 font-semibold text-sm'>Completed - {tasksCompleteList.length}</h2>
          : ''
          }
          <TaskList list={tasksCompleteList} remove={removeTask} change={changeState}/>
        </div>
      </div>

    </div>
  )
}

export default App
