"use client"

import React, { useState } from 'react'
import { toast } from 'react-toastify';
import { addUser } from "@/be_fake/be"

function UserForm({ userId, onClose }) {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  })
  const { name, username, email, password } = user
  function onSubmit(e) {
    e.preventDefault()
    if (!name || !username || !email || !password) {
      toast(<div className='text-red-600'>
        Nhập đầy đủ thông tin
      </div>)
    }
    const res = addUser(user)
    if (res.success) {

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

  return (
    <div className='p-4'>

      <div className="flex justify-between mb-6">
        <h3 className='text-2xl'>{userId ? "Edit User" : "New User"}</h3>
        <div onClick={onClose}>x</div>

      </div>
      <form onSubmit={onSubmit}>
        <div className='flex flex-col mb-3'>
          <label>Username</label>
          <input
            className='border h-10 rounded-lg px-2'
            name="username" onChange={(e) => setUser({
              ...user,
              username: e.target.value
            })} />
        </div>
        <div className='flex flex-col mb-3'>
          <label>Password</label>
          <input
            className='border h-10 rounded-lg px-2'
            name="password" onChange={(e) => setUser({
              ...user,
              password: e.target.value
            })} />
        </div>
        <div className='flex flex-col mb-3'>
          <label>Name</label>
          <input
            className='border h-10 rounded-lg px-2'
            name="Name" onChange={(e) => setUser({
              ...user,
              name: e.target.value
            })} />
        </div>
        <div className='flex flex-col mb-3'>
          <label>Email</label>
          <input
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