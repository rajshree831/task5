const products = [
  {
    id: 1,
    name: "T-Shirt",
    price: 499,
    image: "https://images.unsplash.com/photo-1602810318361-9f08870f0f13?auto=format&fit=crop&w=400&q=80"
  },
  {
    id: 2,
    name: "Headphones",
    price: 999,
    image: "https://images.unsplash.com/photo-1585386959984-a41552262c14?auto=format&fit=crop&w=400&q=80"
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
