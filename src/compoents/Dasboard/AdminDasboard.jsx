import React from 'react'
import Header from '../other/Header'
import CrateTast from '../other/CrateTast'
import AllTask from '../other/AllTask'

function AdminDasboard() {
  return (
    <div className='p-10'>
      <Header />
      <CrateTast />
      <AllTask />
    </div>
  )
}

export default AdminDasboard