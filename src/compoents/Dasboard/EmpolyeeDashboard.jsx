import React from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmpolyeeDashboard = () => {
  return (
    <>
      <div className="p-20 bg-gradient-to-b to-[#fde047] from-[#c084fc] h-screen">
        <Header />
        <TaskListNumbers />
        <TaskList />
      </div>
    </>
  )
}

export default EmpolyeeDashboard