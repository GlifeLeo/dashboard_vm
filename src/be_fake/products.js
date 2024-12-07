// Define an array of products
let products = [
  {
    id: 1,
    productName: "Wireless Bluetooth Headphones",
    productPrice: 79.99,
    productDescription: "Over-ear headphones with noise cancellation, 20-hour battery life, and built-in mic."
  },
  {
    id: 2,
    productName: "Smart Home Light Bulbs",
    productPrice: 34.99,
    productDescription: "Set of 4 smart LED bulbs, compatible with Alexa and Google Assistant, adjustable colors."
  },
  {
    id: 3,
    productName: "Stainless Steel Water Bottle",
    productPrice: 19.99,
    productDescription: "500ml reusable bottle with a vacuum seal to keep drinks cold for 24 hours or hot for 12 hours."
  },
  {
    id: 4,
    productName: "4K Ultra HD Smart TV",
    productPrice: 499.99,
    productDescription: "55-inch 4K LED TV with built-in WiFi, streaming apps, and Dolby Vision."
  },
  {
    id: 5,
    productName: "Electric Coffee Grinder",
    productPrice: 29.99,
    productDescription: "Burr coffee grinder with multiple grind settings, perfect for fresh coffee lovers."
  },
  {
    id: 6,
    productName: "Portable Power Bank",
    productPrice: 39.99,
    productDescription: "10,000mAh power bank with dual USB ports, fast-charging capabilities, and LED indicator."
  },
  {
    id: 7,
    productName: "Yoga Mat with Carrying Strap",
    productPrice: 21.99,
    productDescription: "Non-slip, eco-friendly mat, 1/4-inch thickness for added comfort and support."
  },
  {
    id: 8,
    productName: "Digital Camera Backpack",
    productPrice: 49.99,
    productDescription: "Camera bag with padded compartments, weather-resistant, and ergonomic design."
  },
  {
    id: 9,
    productName: "Electric Kettle with Temperature Control",
    productPrice: 59.99,
    productDescription: "1.7L kettle with precise temperature settings for different tea types, and auto shut-off."
  },
  {
    id: 10,
    productName: "Noise-Canceling Earbuds",
    productPrice: 59.99,
    productDescription: "In-ear, wireless earbuds with active noise cancellation, touch controls, and 12-hour battery life."
  },
  {
    id: 11,
    productName: "LED Desk Lamp",
    productPrice: 24.99,
    productDescription: "Adjustable LED lamp with multiple brightness settings and built-in USB charging port."
  },
  {
    id: 12,
    productName: "Fitness Tracker Smartwatch",
    productPrice: 99.99,
    productDescription: "Waterproof smartwatch with heart rate monitor, step counter, sleep tracker, and GPS."
  },
  {
    id: 13,
    productName: "Air Purifier with HEPA Filter",
    productPrice: 149.99,
    productDescription: "3-stage filtration system, removes allergens, smoke, and dust with a quiet operation."
  },
  {
    id: 14,
    productName: "Adjustable Standing Desk",
    productPrice: 259.99,
    productDescription: "Electric sit-stand desk with memory preset options, sleek design, and sturdy construction."
  },
  {
    id: 15,
    productName: "Wireless Charging Pad",
    productPrice: 24.99,
    productDescription: "Fast-charging wireless pad compatible with Qi-enabled devices, sleek and compact design."
  }
];

const addProduct = (newProduct) => {
  const existProduct = products.find(p => p.productName == newProduct.productName)
  if (existProduct) {
    return { success: false, error: newProduct.productName + " đã tồn tại" }
  } else {
    products = [...products, {
      ...newProduct,
      id: new Date().getTime(),
      createdAt: new Date().getTime()
    }]
    return { success: true, error: "" }
  }
}
const getProductById = (id) => {
  return products.find(p => p.id === id)
}

const getProducts = () => {
  return {
    success: true, products: [...products]
  }
}
const deleteProductById = (id) => {
  products = [...products].filter(p => p.id !== id)
  return { success: true, error: "" }
}

const updateProductById = (id, newProduct) => {
  let newProducts = [...products]
  const updateIndex = newProducts.findIndex(p => p.id == id)
  if (updateIndex < 0) {
    return { success: false, error: "Product not found" }
  }
  const existProduct = newProducts.find(p => p.productName == newProduct.productName && p.id !== id)
  if (existProduct) {
    return { success: false, error: newProduct.uProductname + " đã tồn tại" }
  } else {
    newProducts[updateIndex] = {
      ...newProducts[updateIndex],
      ...newProduct
    }
    products = newProducts
    return { success: true, error: "" }
  }
}

const getProductsBySearch = (searchString) => {
  return {
    success: true,
    products: [...products].filter(p => p.productName.includes(searchString))
  }
}
const sortProducts = (sortBy) => {
  if (sortBy.by == "name") {
    return {
      success: true, products: [...products].sort((a, b) => sortBy.type == "desc" ? b.productName.localeCompare(a.productName) : a.productName.localeCompare(b.productName)
      )
    }
  }
  if (sortBy.by == "price") {
    return {
      success: true, products: [...products].sort((a, b) => sortBy.type == "desc" ? b.productPrice - a.productPrice : a.productPrice - b.productPrice
      )
    }
  }
  return [...products]
}

module.exports = {
  addProduct,
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  getProductsBySearch,
  sortProducts
}
