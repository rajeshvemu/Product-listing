// Premium product data
const products = [
  {
    id: 1,
    title: "Premium Wireless Noise-Cancelling Headphones",
    price: 349.99,
    oldPrice: 399.99,
    discount: 12,
    rating: 4.8,
    ratingCount: 2457,
    category: "Audio",
    image: "https://sony.scene7.com/is/image/sonyglobalsolutions/wh-ch720_Primary_image?$categorypdpnav$&fmt=png-alpha",
    description:
      "Experience premium sound quality with these wireless noise-cancelling headphones. Perfect for music lovers and professionals alike.",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 2,
    title: "Smart Watch Ultra - Premium Edition",
    price: 499.99,
    oldPrice: 549.99,
    discount: 9,
    rating: 4.7,
    ratingCount: 1823,
    category: "Wearables",
    image: "https://s.alicdn.com/@sc04/kf/Hc9afc1d3838649189f4cf9f346b25056U.png_720x720q50.png",
    description:
      "Stay connected and track your fitness with this premium smartwatch featuring advanced health monitoring and a stunning display.",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 3,
    title: "Professional DSLR Camera with 24-70mm Lens",
    price: 1899.99,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    ratingCount: 1214,
    category: "Photography",
    image: "https://futureforward.in/images/thumbs/008/0080012_nikon-d5300-dslr-camera-18-140mm-vr-kit-black_600.jpeg",
    description:
      "Capture stunning photos and videos with this professional-grade DSLR camera, featuring a versatile 24-70mm lens and advanced imaging technology.",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 4,
    title: "Ultra-Slim Smartphone Pro - 256GB",
    price: 999.99,
    oldPrice: 1099.99,
    discount: 9,
    rating: 4.6,
    ratingCount: 3256,
    category: "Electronics",
    image: "https://i.pcmag.com/imagery/articles/03m12PwqBzV5TvxtxllEjoY-1..v1741168228.jpg",
    description:
      "Experience lightning-fast performance and stunning photography with this premium smartphone featuring a pro-grade camera system.",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 5,
    title: 'Premium Ultrabook - 16" 4K Display',
    price: 1799.99,
    oldPrice: 1999.99,
    discount: 10,
    rating: 4.8,
    ratingCount: 987,
    category: "Computers",
    image: "https://i.pcmag.com/imagery/reviews/04x4MxMTbqOwi2Q7Q1e5V6K-2..v1708123401.jpg",
    description:
      "Elevate your productivity with this ultra-thin, powerful laptop featuring a stunning 4K display and all-day battery life.",
    isNew: false,
    isFeatured: true,
  },
  {
    id: 6,
    title: "True Wireless Earbuds with Active Noise Cancellation",
    price: 249.99,
    oldPrice: 299.99,
    discount: 17,
    rating: 4.7,
    ratingCount: 1432,
    category: "Audio",
    image: "https://www.leafstudios.in/cdn/shop/files/1_6b54ff34-acdd-40e6-a08a-f2bfa33a1c7a_800x.png?v=1718706988",
    description:
      "Immerse yourself in your favorite music with these premium wireless earbuds featuring active noise cancellation and crystal-clear sound.",
    isNew: true,
    isFeatured: false,
  },
  {
    id: 7,
    title: "Smart Home Speaker with Voice Assistant",
    price: 199.99,
    oldPrice: null,
    discount: 0,
    rating: 4.5,
    ratingCount: 876,
    category: "Smart Home",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRWMFV1irwmFapHtQYwJ84gtNUKV8mhqqNvw&s",
    description:
      "Transform your home with this intelligent speaker featuring a premium voice assistant and room-filling sound quality.",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 8,
    title: "Next-Gen Gaming Console - 1TB",
    price: 499.99,
    oldPrice: null,
    discount: 0,
    rating: 4.9,
    ratingCount: 2345,
    category: "Gaming",
    image: "https://sm.pcmag.com/pcmag_au/opinions/n/next-gen-g/next-gen-game-consoles-are-hideous-except-xbox-series-s_bf76.jpg",
    description:
      "Experience the future of gaming with this next-generation console featuring lightning-fast loading times and stunning graphics.",
    isNew: true,
    isFeatured: true,
  },
  {
    id: 9,
    title: "Premium Fitness Tracker with Heart Rate Monitor",
    price: 129.99,
    oldPrice: 149.99,
    discount: 13,
    rating: 4.6,
    ratingCount: 1123,
    category: "Fitness",
    image: "https://m.media-amazon.com/images/I/61sMF5z9c2L._AC_UF1000,1000_QL80_.jpg",
    description:
      "Track your fitness goals with precision using this advanced fitness tracker with heart rate monitoring and sleep analysis.",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 10,
    title: "Portable Bluetooth Speaker - Waterproof",
    price: 129.99,
    oldPrice: 149.99,
    discount: 13,
    rating: 4.4,
    ratingCount: 654,
    category: "Audio",
    image: "https://img.tatacliq.com/images/i18//437Wx649H/MP000000022888917_437Wx649H_202407122114201.jpeg",
    description:
      "Take your music anywhere with this premium waterproof Bluetooth speaker featuring 20 hours of battery life and immersive sound.",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 11,
    title: "Professional Drawing Tablet with Pen",
    price: 349.99,
    oldPrice: 399.99,
    discount: 12,
    rating: 4.7,
    ratingCount: 876,
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/61+k20KQW4L.jpg",
    description:
      "Unleash your creativity with this professional-grade drawing tablet featuring pressure sensitivity and a responsive pen experience.",
    isNew: false,
    isFeatured: false,
  },
  {
    id: 12,
    title: "Wireless Charging Pad - Fast Charge",
    price: 49.99,
    oldPrice: 59.99,
    discount: 17,
    rating: 4.5,
    ratingCount: 543,
    category: "Accessories",
    image: "https://m.media-amazon.com/images/I/61fqnDGOXjS._AC_UF1000,1000_QL80_.jpg",
    description:
      "Charge your devices effortlessly with this premium wireless charging pad featuring fast charging technology and sleek design.",
    isNew: false,
    isFeatured: false,
  },
]

// Function to generate more products
function generateMoreProducts(startId, count) {
  const categories = [
    "Audio",
    "Wearables",
    "Photography",
    "Electronics",
    "Computers",
    "Smart Home",
    "Gaming",
    "Fitness",
    "Accessories",
  ]

  const productNames = [
    "Wireless Headphones",
    "Smart Watch",
    "Digital Camera",
    "Smartphone",
    "Laptop",
    "Wireless Earbuds",
    "Bluetooth Speaker",
    "Gaming Console",
    "Fitness Tracker",
    "Charging Dock",
    "Drawing Tablet",
    "Mechanical Keyboard",
  ]

  const adjectives = [
    "Premium",
    "Ultra",
    "Professional",
    "Elite",
    "Deluxe",
    "Advanced",
    "Signature",
    "Executive",
    "Supreme",
    "Ultimate",
  ]

  const newProducts = []

  for (let i = 0; i < count; i++) {
    const id = startId + i
    const productIndex = Math.floor(Math.random() * productNames.length)
    const categoryIndex = Math.floor(Math.random() * categories.length)
    const adjectiveIndex = Math.floor(Math.random() * adjectives.length)

    const basePrice = Math.floor(Math.random() * 900 + 99.99)
    const hasDiscount = Math.random() > 0.5
    const discountPercent = hasDiscount ? Math.floor(Math.random() * 20 + 5) : 0
    const oldPrice = hasDiscount ? basePrice * (1 + discountPercent / 100) : null

    newProducts.push({
      id: id,
      title: `${adjectives[adjectiveIndex]} ${productNames[productIndex]} - ${id % 2 === 0 ? "Limited Edition" : "Pro Series"}`,
      price: basePrice.toFixed(2),
      oldPrice: oldPrice ? oldPrice.toFixed(2) : null,
      discount: discountPercent,
      rating: (Math.random() * 0.9 + 4.1).toFixed(1),
      ratingCount: Math.floor(Math.random() * 3000 + 100),
      category: categories[categoryIndex],
      image: `assets/products/product-${(id % 12) + 1}.jpg`,
      description:
        "Experience premium quality and performance with this exceptional product designed for those who demand the very best.",
      isNew: Math.random() > 0.7,
      isFeatured: Math.random() > 0.7,
    })
  }

  return newProducts
}

// Function to create a product card
function createProductCard(product) {
  const card = document.createElement("div")
  card.className = "product-card"
  card.setAttribute("data-product-id", product.id)

  // Generate star rating HTML
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating % 1 >= 0.5
  let starsHTML = ""

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }

  card.innerHTML = `
    <div class="product-image-container">
      <img src="${product.image}" alt="${product.title}" class="product-image">
      ${product.discount > 0 ? `<div class="discount-badge">-${product.discount}%</div>` : ""}
      ${product.isNew ? `<div class="discount-badge" style="background-color: #10b981;">New</div>` : ""}
      <div class="product-actions">
        <button class="product-action-btn quick-view-trigger" data-product-id="${product.id}">
          <i class="fas fa-eye"></i>
        </button>
        <button class="product-action-btn">
          <i class="fas fa-heart"></i>
        </button>
        <button class="product-action-btn">
          <i class="fas fa-exchange-alt"></i>
        </button>
      </div>
    </div>
    <div class="product-info">
      <div class="product-category">${product.category}</div>
      <h3 class="product-title">${product.title}</h3>
      <div class="product-price-container">
        <span class="product-price">$${product.price}</span>
        ${product.oldPrice ? `<span class="product-old-price">$${product.oldPrice}</span>` : ""}
      </div>
      <div class="product-rating">
        <div class="rating-stars">${starsHTML}</div>
        <span class="rating-count">(${product.ratingCount})</span>
      </div>
      <button class="add-to-cart-btn" data-product-id="${product.id}">
        <i class="fas fa-shopping-cart"></i>
        Add to Cart
      </button>
    </div>
  `

  return card
}

// Function to create quick view content
function createQuickViewContent(product) {
  const fullStars = Math.floor(product.rating)
  const hasHalfStar = product.rating % 1 >= 0.5
  let starsHTML = ""

  for (let i = 0; i < fullStars; i++) {
    starsHTML += '<i class="fas fa-star"></i>'
  }

  if (hasHalfStar) {
    starsHTML += '<i class="fas fa-star-half-alt"></i>'
  }

  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0)
  for (let i = 0; i < emptyStars; i++) {
    starsHTML += '<i class="far fa-star"></i>'
  }

  return `
    <div class="quick-view-image">
      <img src="${product.image}" alt="${product.title}">
    </div>
    <div class="quick-view-details">
      <div class="quick-view-category">${product.category}</div>
      <h2 class="quick-view-title">${product.title}</h2>
      <div class="product-rating">
        <div class="rating-stars">${starsHTML}</div>
        <span class="rating-count">(${product.ratingCount} reviews)</span>
      </div>
      <div class="quick-view-price">
        $${product.price}
        ${product.oldPrice ? `<span class="product-old-price">$${product.oldPrice}</span>` : ""}
      </div>
      <p class="quick-view-description">${product.description}</p>
      <div class="quick-view-actions">
        <div class="quantity-selector">
          <button class="quantity-btn" data-action="decrease">-</button>
          <input type="number" class="quantity-input" value="1" min="1" max="10">
          <button class="quantity-btn" data-action="increase">+</button>
        </div>
        <button class="quick-view-add-to-cart" data-product-id="${product.id}">
          Add to Cart
        </button>
      </div>
    </div>
  `
}

// Function to load products
function loadProducts(products) {
  const productGrid = document.getElementById("product-grid")
  const productsTotal = document.getElementById("products-total")

  products.forEach((product) => {
    const card = createProductCard(product)
    productGrid.appendChild(card)
  })

  // Update products count
  const totalProducts = productGrid.children.length
  productsTotal.textContent = totalProducts
}

// Function to show notification
function showNotification(message) {
  const notification = document.getElementById("cart-notification")
  notification.querySelector("p").textContent = message
  notification.classList.add("show")

  setTimeout(() => {
    notification.classList.remove("show")
  }, 3000)
}

// Initial load
document.addEventListener("DOMContentLoaded", () => {
  // Replace placeholder images with actual product images
  for (let i = 0; i < products.length; i++) {
    products[i].image = `assets/products/product-${(i % 12) + 1}.jpg`
  }

  loadProducts(products)

  // Scroll more button functionality
  const scrollMoreBtn = document.getElementById("scroll-more")
  const loadingIndicator = document.getElementById("loading-indicator")
  let loadedCount = products.length

  scrollMoreBtn.addEventListener("click", () => {
    // Hide scroll more button and show loading indicator
    scrollMoreBtn.style.display = "none"
    loadingIndicator.style.display = "flex"

    // Simulate loading delay
    setTimeout(() => {
      const newProducts = generateMoreProducts(loadedCount + 1, 12)
      loadProducts(newProducts)
      loadedCount += 12

      // Hide loading indicator and show scroll more button
      loadingIndicator.style.display = "none"
      scrollMoreBtn.style.display = "flex"

      // Smooth scroll to show new products
      window.scrollBy({
        top: 400,
        behavior: "smooth",
      })
    }, 1500)
  })

  // Quick view functionality
  document.addEventListener("click", (e) => {
    // Quick view trigger
    if (e.target.closest(".quick-view-trigger")) {
      const button = e.target.closest(".quick-view-trigger")
      const productId = Number.parseInt(button.getAttribute("data-product-id"))
      const product =
        products.find((p) => p.id === productId) || generateMoreProducts(1, loadedCount).find((p) => p.id === productId)

      if (product) {
        const modal = document.getElementById("quick-view-modal")
        const content = document.getElementById("quick-view-content")

        content.innerHTML = createQuickViewContent(product)
        modal.style.display = "flex"

        // Quantity selector functionality
        const quantityInput = content.querySelector(".quantity-input")
        content.querySelectorAll(".quantity-btn").forEach((btn) => {
          btn.addEventListener("click", () => {
            const action = btn.getAttribute("data-action")
            let value = Number.parseInt(quantityInput.value)

            if (action === "increase") {
              value = Math.min(value + 1, 10)
            } else {
              value = Math.max(value - 1, 1)
            }

            quantityInput.value = value
          })
        })

        // Add to cart from quick view
        const addToCartBtn = content.querySelector(".quick-view-add-to-cart")
        addToCartBtn.addEventListener("click", () => {
          const quantity = Number.parseInt(quantityInput.value)
          showNotification(`${quantity} × ${product.title} added to cart!`)
          modal.style.display = "none"
        })
      }
    }

    // Close modal
    if (e.target.classList.contains("modal") || e.target.classList.contains("close-modal")) {
      document.getElementById("quick-view-modal").style.display = "none"
    }

    // Add to cart
    if (e.target.closest(".add-to-cart-btn")) {
      const button = e.target.closest(".add-to-cart-btn")
      const productId = Number.parseInt(button.getAttribute("data-product-id"))
      const product =
        products.find((p) => p.id === productId) || generateMoreProducts(1, loadedCount).find((p) => p.id === productId)

      if (product) {
        showNotification(`${product.title} added to cart!`)
      }
    }
  })

  // Category filter functionality
  const categoryFilter = document.getElementById("category-filter")
  categoryFilter.addEventListener("change", () => {
    const selectedCategory = categoryFilter.value
    const productCards = document.querySelectorAll(".product-card")

    productCards.forEach((card) => {
      const category = card.querySelector(".product-category").textContent

      if (selectedCategory === "" || category === selectedCategory) {
        card.style.display = "block"
      } else {
        card.style.display = "none"
      }
    })

    // Update products count
    const visibleProducts = document.querySelectorAll(".product-card[style='display: block']").length
    document.getElementById("products-total").textContent = visibleProducts
  })

  // Sort filter functionality
  const sortFilter = document.getElementById("sort-filter")
  sortFilter.addEventListener("change", () => {
    const selectedSort = sortFilter.value
    const productGrid = document.getElementById("product-grid")
    const productCards = Array.from(productGrid.children)

    productCards.sort((a, b) => {
      const aPrice = Number.parseFloat(a.querySelector(".product-price").textContent.replace("$", ""))
      const bPrice = Number.parseFloat(b.querySelector(".product-price").textContent.replace("$", ""))
      const aRating = Number.parseFloat(a.querySelector(".rating-stars").textContent.match(/★/g)?.length || 0)
      const bRating = Number.parseFloat(b.querySelector(".rating-stars").textContent.match(/★/g)?.length || 0)

      switch (selectedSort) {
        case "price-low":
          return aPrice - bPrice
        case "price-high":
          return bPrice - aPrice
        case "rating":
          return bRating - aRating
        default:
          return 0
      }
    })

    // Clear and re-append sorted cards
    productGrid.innerHTML = ""
    productCards.forEach((card) => {
      productGrid.appendChild(card)
    })
  })

  // View options functionality
  const viewButtons = document.querySelectorAll(".view-btn")
  const productGrid = document.getElementById("product-grid")

  viewButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const view = button.getAttribute("data-view")

      // Update active button
      viewButtons.forEach((btn) => btn.classList.remove("active"))
      button.classList.add("active")

      // Update grid view
      if (view === "list") {
        productGrid.style.gridTemplateColumns = "1fr"
        productGrid.querySelectorAll(".product-card").forEach((card) => {
          card.style.display = "flex"
          card.querySelector(".product-image-container").style.width = "300px"
          card.querySelector(".product-info").style.flex = "1"
        })
      } else {
        productGrid.style.gridTemplateColumns = ""
        productGrid.querySelectorAll(".product-card").forEach((card) => {
          card.style.display = ""
          card.querySelector(".product-image-container").style.width = ""
          card.querySelector(".product-info").style.flex = ""
        })
      }
    })
  })

  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn")
  const nav = document.querySelector("nav")

  mobileMenuBtn.addEventListener("click", () => {
    if (nav.style.display === "block") {
      nav.style.display = "none"
    } else {
      nav.style.display = "block"
      nav.style.position = "absolute"
      nav.style.top = "70px"
      nav.style.left = "0"
      nav.style.width = "100%"
      nav.style.backgroundColor = "white"
      nav.style.padding = "20px"
      nav.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.1)"

      nav.querySelector("ul").style.flexDirection = "column"
      nav.querySelectorAll("li").forEach((li) => {
        li.style.marginBottom = "16px"
      })
    }
  })

  // Close mobile menu on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      nav.style = ""
      nav.querySelector("ul").style = ""
      nav.querySelectorAll("li").forEach((li) => {
        li.style = ""
      })
    }
  })
})
