let customers = []
function getCustomers() {
  return [...customers]
}

function getCustomerById(id) {
  return [...customers].find(c => c.id == id)
}

function deleteCustomerById(id) {
  let newCustomers = [...customers]
  const index = newCustomers.findIndex(c => c.id == id)
  index > -1 && newCustomers.splice(index, 1)
  return newCustomers
}

function addCustomer(customer) {
  return [...customers, customer]
}

let users = [
  {
    id: "1",
    username: "user1",
    password: "123456", // 64578365hkj@372537248p435 hash
    token: "token1",
    name: "nguyen thi thap",
    email: "email1@gmail.com",
    createdAt: 1732329206922,
  },
  {
    id: "2",
    username: "user2",
    password: "123456",// 64578365hkj@372537248p435 hash
    token: "token2",
    name: "Trung Son",
    email: "email2@gmail.com",
    createdAt: 1732329206922,
  }
]

function login(username, password) {
  const user = users.find(user => user.username == username)
  if (!user) {
    return { success: false, message: "user not found" }
  }
  if (user.password === password) {
    return {
      success: true,
      token: user.token,
      user: user,// bo field password
      message: "login success"
    }
  } else {
    return { success: false, message: "password wrong" }
  }
}
function getUserByToken(token) {
  const user = users.find(user => user.token == token)
  if (!user) {
    return { success: false, message: "user not found" }
  }
  return {
    success: true,
    token: user.token,
    user: user,// bo field password
    message: "login success"
  }
}

const addUser = (newUser) => {
  const existUser = users.find(u => u.username == newUser.username)
  if (existUser) {
    return { success: false, error: newUser.username + " đã tồn tại" }
  } else {
    users = [...users, {
      ...newUser,
      id: new Date().getTime(),
      createdAt: new Date().getTime()
    }]
    return { success: true, error: "" }
  }
}
const getUserById = (id) => {
  return users.find(u => u.id === id)
}

const getUsers = () => {
  return [...users]
}
const deleteUserById = (id) => {
  users = [...users].filter(u => u.id !== id)
  return { success: true, error: "" }
}

const updateUserById = (id, newUser) => {
  let newUsers = [...users]
  const updateIndex = newUsers.findIndex(u => u.id == id)
  if (updateIndex < 0) {
    return { success: false, error: "User not found" }
  }
  const existUser = newUsers.find(u => u.username == newUser.username && u.id !== id)
  if (existUser) {
    return { success: false, error: newUser.username + " đã tồn tại" }
  } else {
    newUsers[updateIndex] = newUser
    users = newUsers
    return { success: true, error: "" }
  }
}

module.exports = {
  login,
  getUserByToken,
  getCustomerById,
  getCustomers,
  deleteCustomerById,
  addCustomer,
  addUser,
  getUsers,
  getUserById,
  deleteUserById,
  updateUserById
}
