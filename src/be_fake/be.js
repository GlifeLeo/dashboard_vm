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

const users = [
  {
    username: "user1",
    password: "123456", // 64578365hkj@372537248p435 hash
    token: "token1",
    name: "nguyen thi thap",
    email: "email1@gmail.com",
  },
  {
    username: "user2",
    password: "123456",// 64578365hkj@372537248p435 hash
    token: "token2",
    name: "Tan Cang",
    email: "email2@gmail.com",
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

module.exports = {
  login,
  getUserByToken,
  getCustomerById,
  getCustomers,
  deleteCustomerById,
  addCustomer
}
