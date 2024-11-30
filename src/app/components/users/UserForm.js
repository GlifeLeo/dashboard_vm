"use client"

import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import { addUser, getUserById, updateUserById } from "@/be_fake/be"
import Input from '@/app/components/ui/Input';

function UserForm({ userId, onClose, refetch }) {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  })

  // const [name, setName] = useSate("")
  // const [age, setAge] = useSate(0)

  const { name, username, email, password } = user

  function handleClose() {
    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
    })
    onClose()
  }

  function onSubmit(e) {
    e.preventDefault()
    if (!name || !username || !email || !password) {
      toast(<div className='text-red-600'>
        Nhập đầy đủ thông tin
      </div>)
      return
    }
    const res = userId ? updateUserById(userId, user) : addUser(user)
    if (res.success) {
      toast(<div className='text-green-600'>
        {userId ? "Cập nhật thành công" : "Thêm thành công"}
      </div>)
      refetch()
      handleClose()
    } else {
      toast(<div className='text-red-600'>
        {res.error}
      </div>)
    }
    // call api
    // call success
    //refresh list
    // onClose
  }

  useEffect(() => {
    if (userId) {
      const loadedUser = getUserById(userId)
      setUser({
        name: loadedUser.name,
        username: loadedUser.username,
        email: loadedUser.email,
        password: loadedUser.password,
      })
    }
  }, [userId])

  return (
    <div className='p-4'>

      <div className="flex justify-between mb-6">
        <h3 className='text-2xl'>{userId ? "Edit User" : "New User"}</h3>
        <div onClick={onClose}>x</div>

      </div>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col mb-3'>
          <label>Username</label>
          <Input
            // className='border-red-500 border'
            defaultValue={user.username}
            onChange={(v) => setUser({
              ...user,
              username: v
            })}
          />
        </div>

        <div className='flex flex-col mb-3'>
          <label>Password</label>
          <input
            value={user.password}
            className='border h-10 rounded-lg px-2'
            name="password" onChange={(e) => setUser({
              ...user,
              password: e.target.value
            })} />
        </div>
        <div className='flex flex-col mb-3'>
          <label>Name</label>
          <input
            value={user.name}
            className='border h-10 rounded-lg px-2'
            name="Name" onChange={(e) => setUser({
              ...user,
              name: e.target.value
            })} />
        </div>
        <div className='flex flex-col mb-3'>
          <label>Email</label>
          <input
            value={user.email}
            className='border h-10 rounded-lg px-2'
            name="email" onChange={(e) => setUser({
              ...user,
              email: e.target.value
            })} />
        </div>

        <button className='bg-green-700 text-white px-6 py-1 rounded-lg mt-2' type="submit">Save</button>
      </form>
    </div>
  )
}

export default UserForm