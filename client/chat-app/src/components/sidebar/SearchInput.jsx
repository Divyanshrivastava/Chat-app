import React, { useState } from 'react'
import toast from 'react-hot-toast'
import {IoSearchSharp} from 'react-icons/io5'
import useGetConversations from '../../hooks/useGetConversation'
import useConversation from '../../zustand/useConversation'

function SearchInput() {

  const [search, setSearch] = useState()
  const {setSelectedConversation} = useConversation()

  const {conversations } = useGetConversations()

  const handlesubmit = (e) => {
    e.preventDefault()
    if(search.length < 3) {
      return toast.error('Search term must be at least 3 characters long')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()))

    if(conversation){
      setSelectedConversation(conversation)
      setSearch('')
    } else toast.error("No such user found!")

  }
  return (
    <form onSubmit={handlesubmit} className='flex items-center gap-2'>
      <input type="text" placeholder='Search...' 
      className='input input-bordered rounded-full'
      value={search}
      onChange= {(e) => setSearch(e.target.value)}
      />
      <button type='submit' className='btn btn-circle bg-cyan-500 text-white'>
         <IoSearchSharp className='w-6 h-6 outline-none' />
      </button>
    </form>
  )
}

export default SearchInput