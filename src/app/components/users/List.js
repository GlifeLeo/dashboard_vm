"use client"
import React, { useEffect, useState } from 'react'
import MyDrawer from '../Drawer'
import UserForm from "@/app/components/users/UserForm"
import { getUsers } from "@/be_fake/be"
function ListUser() {
  const [users, setUsers] = useState([])

  function fetchUsers() {
    // call api
    const loadedUsers = getUsers()
    setUsers(loadedUsers)
  }

  useEffect(() => {
    fetchUsers()
  }, [])

  const [isOpenNewCustomerForm, setIsOpenNewCustomerForm] = useState(false)
  const [selectedUserId, setSelectedUserId] = useState("")

  function openNewCustomerForm(id) {
    if (id) {
      setSelectedUserId(id)
    }
    setIsOpenNewCustomerForm(true)
  }

  function closeNewCustomerForm() {
    setSelectedUserId("")
    setIsOpenNewCustomerForm(false)
  }

  return (
    <div>
      <MyDrawer
        open={isOpenNewCustomerForm}
        onClose={closeNewCustomerForm}
      >
        <UserForm userId={selectedUserId} onClose={closeNewCustomerForm} />
      </MyDrawer>

      <div className='flex justify-between items-start'>
        <h2 className="text-2xl mb-6">
          Users
        </h2>
        <button onClick={() => openNewCustomerForm(null)} className='bg-green-700 rounded-lg py-2 px-10 text-white'>New</button>
      </div>
      <table cellPadding={10} className='border-collapse border w-full'>
        <thead className='text-left bg-gray-500 text-white'>
          <tr>
            <th className='border'>Username</th>
            <th className='border'>Name</th>
            <th className='border'>Email</th>
            <th className='border'></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <tr key={index}>
              <td className='border'>{user.username}</td>
              <td className='border'>{user.name}</td>
              <td className='border'>{user.email}</td>
              <td className='border'>
                <button onClick={() => openNewCustomerForm(user.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </button>
                <button onClick={() => openNewCustomerForm(user.id)}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                  </svg>
                </button>
              </td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ListUser