import React from 'react'

const TaskListNumbers = () => {
  return (
    <>
    <div className="flex mt-10 justify-between gap-5">
      <div className="px-12 py-10 rounded-xl w-[45%] bg-red-500">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="px-12 py-10 rounded-xl w-[45%] bg-blue-500">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="px-12 py-10 rounded-xl w-[45%] bg-green-500">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
      <div className="px-12 py-10 rounded-xl w-[45%] bg-yellow-500">
        <h2 className="text-4xl font-semibold">0</h2>
        <h3 className="text-2xl font-medium">New Task</h3>
      </div>
    </div>
    </>
  )
}

export default TaskListNumbers