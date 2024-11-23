import dynamic from 'next/dynamic';
import React from 'react'
import 'react-modern-drawer/dist/index.css'
const Drawer = dynamic(() => import('react-modern-drawer'), {
  ssr: false,
})

function MyDrawer({
  open,
  onClose,
  direction = "right",
  className = "",
  children
}) {
  return (
    <Drawer
      id="drawer"
      open={open}
      onClose={onClose}
      direction={direction}
      className={className}
      style={{ minWidth: "400px" }}
    >
      {children}
    </Drawer>
  )
}

export default MyDrawer