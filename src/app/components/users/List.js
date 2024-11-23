"use client"
import React, { useState } from 'react'
import MyDrawer from '../Drawer'
import UserForm from "@/app/components/users/UserForm"
function ListUser() {
  const users = [
    {
      id: 1,
      username: "user 1",
      name: "abc",
      email: "abc@gmail.com",
    },
    {
      id: 2,
      username: "user 2",
      name: "abcd",
      email: "abcd@gmail.com",
    },
  ]

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
                <button onClick={() => openNewCustomerForm(user.id)} className='bg-green-700 rounded-lg py-2 px-10 text-white'>Edit</button></td>
            </tr>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ListUser