"use client"
import React, { useEffect, useState } from 'react'
import MyDrawer from '../Drawer'
import UserForm from "@/app/components/users/UserForm"
import UserItem from '@/app/components/users/UserItem'
import Input from '../ui/Input'
import { getUsers, getUsersBySearch } from "@/be_fake/be"
function ListUser() {
  const [users, setUsers] = useState([])

  function fetchUsers() {
    // call api
    const loadedUsers = getUsers()
    setUsers(loadedUsers)
  }

  useEffect(() => {
    fetchUsers()
    // const loadedUsers = getUsers()
    // setUsers(loadedUsers)
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

  const [search, setSearch] = useState("")

  useEffect(() => {
    const loadedUsers = getUsersBySearch(search)
    setUsers(loadedUsers)
  }, [search])

  return (
    <div>

      <MyDrawer
        open={isOpenNewCustomerForm}
        onClose={closeNewCustomerForm}
      >
        <UserForm
          refetch={fetchUsers}
          userId={selectedUserId}
          onClose={closeNewCustomerForm}
        />
      </MyDrawer>

      <div className='flex justify-between items-start'>
        <h2 className="text-2xl mb-6">
          Users
        </h2>
        <button onClick={() => openNewCustomerForm(null)} className='bg-green-700 rounded-lg py-2 px-10 text-white'>New</button>
      </div>
      <div className='my-3'>
        <Input
          placeholder="search"
          // className='border-red-500 border'
          defaultValue={search}
          onChange={(v) => setSearch(v)}
        />
      </div>
      <table cellPadding={10} className='border-collapse border w-full'>
        <thead className='text-left bg-gray-500 text-white'>
          <tr>
            <th className='border'>Username</th>
            <th className='border'>Name</th>
            <th className='border'>Email</th>
            <th className='border'>Created At</th>
            <th className='border'></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return <React.Fragment key={index}>
              <UserItem
                refetch={fetchUsers}
                user={user}
                openNewCustomerForm={openNewCustomerForm} />
            </React.Fragment>
          })}

        </tbody>
      </table>
    </div>
  )
}

export default ListUser