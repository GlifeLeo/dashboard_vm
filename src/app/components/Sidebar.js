"use client"

import React from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { clsx } from 'clsx'
function Sidebar() {
  const pathName = usePathname()
  const menu = [
    { url: "/users", label: "Users" },
    { url: "/customers", label: "Customers" },
    { url: "/food", label: "Food" },
  ]
  return (
    <div className='w-60 bg-green-500'>
      <Link href="/" >
        <h1 className='text-3xl mb-6 text-center py-3'>
          Logo
        </h1>
      </Link>
      <ul>
        {menu.map((item, index) => {
          const isActive = pathName == item.url
          return <li key={index} >
            <Link
              href={item.url}
              className={
                // `block text-white text-center py-4 hover:bg-green-600 transition-all duration-150 ${isActive ? "bg-green-800" : ""}
                //  `
                clsx({
                  "block text-white text-center py-4 hover:bg-green-600 transition-all duration-150": true,
                  "bg-green-800": isActive,
                })
              }
            >
              {item.label}
            </Link>
          </li>

        })}
      </ul>
    </div>
  )
}

export default Sidebar