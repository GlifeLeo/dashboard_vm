"use client"

import React, { useState } from 'react'

function UserForm({ userId, onClose }) {

  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
  })

  function onSubmit() {
    console.log(user)
    // call api
    // call success
    //refresh list
    // onClose
  }

  return (
    <div>
      <div onClick={onClose}>x</div>
      {userId ? "Edit User" : "New User"}
      <form onSubmit={onSubmit}>
        <input name="username" onChange={(e) => setUser({
          ...user,
          username: e.target.value
        })} />
        <input />
        <input />
        <input />
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default UserForm