'use client'
import React, { useState } from 'react'
import dayjs from "dayjs"
import { deleteUserById } from "@/be_fake/be"
import { toast } from 'react-toastify';

function UserItem(props) {

  const { user, openNewCustomerForm, refetch } = props
  const [showConfirm, setShowConfirm] = useState(false)

  function handleDeleteUser() {
    const res = deleteUserById(user.id)
    if (res.success) {
      refetch()
      toast(<div className='text-green-600'>
        Xoá thành công
      </div>)
    }
  }

  return (
    <tr>
      <td className='border'>{user.username}</td>
      <td className='border'>{user.name}</td>
      <td className='border'>{user.email}</td>
      <td className='border'>{dayjs(user.createdAt).format("DD MMM YYYY h:mm a")}</td>
      <td className='border'>
        <button onClick={() => openNewCustomerForm(user.id)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
          </svg>
        </button>
        <button onClick={() => setShowConfirm(true)}>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
        {showConfirm && <div className='absolute bg-slate-50 border rounded-md py-2 px-4 flex gap-x-4'>
          <svg
            onClick={handleDeleteUser}
            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <svg
            onClick={() => setShowConfirm(false)}
            xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </div>}
      </td>
    </tr>
  )
}

export default UserItem