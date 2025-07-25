const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image: "https://image.hm.com/assets/hm/12/04/120420bc2bedd11cc784672272c10f9c90220da8.jpg?imwidth=1260"
  },
  {
    id: 2,
    name: "Headphones",
    price: 999,
    image: "data:image/jpeg;base64,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"
  },
  {
    id: 3,
    name: "Book",
    price: 299,
    image: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80"
  }
]



const productContainer = document.getElementById("products")
const cartBtn = document.getElementById("cart-btn")
const cartSection = document.getElementById("cart")
const cartItemsList = document.getElementById("cart-items")
const cartCount = document.getElementById("cart-count")
const cartTotal = document.getElementById("cart-total")

let cart = []

products.forEach(p => {
  const card = document.createElement("div")
  card.className = "product"
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}" />
    <h3>${p.name}</h3>
    <p>₹${p.price}</p>
    <button onclick="addToCart(${p.id})">Add to Cart</button>
  `
  productContainer.appendChild(card)
})


function addToCart(id) {
  const item = products.find(p => p.id === id)
  cart.push(item)
  updateCart()
}

function updateCart() {
  cartItemsList.innerHTML = ""
  let total = 0
  cart.forEach(p => {
    const li = document.createElement("li")
    li.textContent = `${p.name} - ₹${p.price}`
    cartItemsList.appendChild(li)
    total += p.price
  })
  cartCount.textContent = cart.length
  cartTotal.textContent = total
}

cartBtn.onclick = () => {
  cartSection.classList.toggle("hidden")
}
