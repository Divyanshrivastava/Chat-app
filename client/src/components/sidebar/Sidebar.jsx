import React from 'react'
import Conversations from './Conversations'
import LogoutBtn from './LogoutBtn'
import SearchInput from './SearchInput'

function Sidebar() {
  return (
    <div className='border-r border-slate-500 p-4 flex flex-col'>
        <SearchInput />
        <div className='divider px-3'></div>
        <Conversations />

        <LogoutBtn />
    </div>
  )
}

export default Sidebar