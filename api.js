// Simulated product data for 4 products
const products = [
  {
    "id": 1,
    title: "Wonder Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/3/HC/MU/XT/147745819/4-feet-wooden-designer-stool-500x500.jpg"
  },
  {
    id: 2,
    title: "Wonder Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://www.sahsghana.com/cdn/shop/files/Single_6b67f374-3cc0-40dc-bb26-8dc5d4d0b69a.jpg?v=1698928449"
  }, {
    id: 3,
    title: "Wonder Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://www.sharenply.com/uploaded-files/category/images/Plywood-Door.jpg"
  },
  {
    id: 4,
    title: "Wonder Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://www.shabanastores.com/wp-content/uploads/2023/11/Shabana-stores-Barry-Wood-Internal-Wood-Door-Code-WPC-400-Reddish-Brown-90cm-2.png"
  },
  {
    id: 5,
    title: "WPC Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/7/326799514/FB/YJ/ZZ/149320369/28mm-sv-woods-wpc-door.jpg"
  },
  {
    id: 6,
    title: "WPC Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://www.door-manufacturers.com/doorpic/201611563923868.jpg"
  },
  {
    id: 7,
    title: "WPC Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://5.imimg.com/data5/SELLER/Default/2023/9/348392835/NN/HN/XN/2761234/whatsapp-image-2023-09-29-at-10-12-49-500x500.jpeg"
  },
  {
    id: 8,
    title: "Bathroom Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://5.imimg.com/data5/SELLER/Default/2022/4/RA/XM/GH/48686805/wpc-coloured-door-frame-500x500.jpg"
  },
  {
    id: 9,
    title: "Door Lock",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://image.made-in-china.com/202f0j00SIeGvKQqCLoD/Entrance-Door-Lock-Double-Sided-Key-Door-Handle-Lock-Mortise-Door-Lock-Set.webp"
  },
  {
    id: 10,
    title: "Door Lock",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://s.alicdn.com/@sc04/kf/H002acb9489a940578b8ed7dc706c66e2o.jpg_720x720q50.jpg"
  },
  {
    id: 11,
    title: "Wonder Door",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://cdn.bestsuppliers.com/seo_products_img/newkind/1600488963688/0c6cc79b08493b538734365db3eafea2.jpg!/rotate/180/sq/400"
  },
  {
    id: 12,
    title: "Door Lock",
    price: 29,
    description: [
      { "key": "mode", "value": "H7 LAMINATE LK 4425 A" },
      { "key": "color", "value": "As per client's requirement" },
      { "key": "Door frame", "value": "45 x 110 - 300 mm" },
      { "key": "Door Leaf", "value": "40 - 50 mm" },
      { "key": "Inner core or door leaf", "value": "Honeycomb" },
      { "key": "Casting", "value": "50 x 10 mm" },
      { "key": "Hardware", "value": "As per client's requirement" },
      { "key": "Finishing", "value": "Laminate" },
      { "key": "Brand name", "value": "AN CUONG"},
      { "key": "Origin", "value": "Viet Nam" }
    ]
    ,
    image: "https://www.hafele.co.uk/INTERSHOP/static/WFS/Haefele-HUK-Site/-/Haefele-HUK/en_GB/opentext/assets/huk/Rim-locks-responsive.jpg"
  }
  ];

  function displayProducts() {
    // Get the container element once
    const productContainer = document.getElementById('product-container');
    
    // Initialize productCards as an empty string
    let productCards = '';
    
    // Loop through products and generate cards
    products.forEach((product, index) => {
      productCards += `
        <div id="pd"
          class="product-card relative max-w-xs overflow-hidden group hover:cursor-pointer border-2 border-transparent group-hover:border-blue-500 transform transition-all duration-300"
          data-index="${index}"
        >
          <!-- Product Image -->
          <img id="imga" class="w-full h-100 object-cover transition-transform duration-300" src="${product.image}" alt="${product.title}">
  
          <!-- Shine Effect -->
          <div class="shine absolute inset-0 z-10 opacity-0 group-hover:opacity-100"></div>
  
          <!-- Product Info -->
          <div class="px-6 py-4 bg-blue-900">
            <div class="text-center font-semibold text-xl mb-2 text-white">${product.title}</div>
          </div>
        </div>
      `;
    });
  
    // Insert product cards into the container
    productContainer.innerHTML = productCards;
  
    // Add a click event listener for product cards
productContainer.addEventListener('click', (event) => {
  const productCard = event.target.closest('.product-card');
  if (productCard) {
    const index = productCard.getAttribute('data-index');
    const product = products[index];
    
    // Convert description to JSON string if it's an object or array
    const description = JSON.stringify(product.description);
    
    // Redirect to product detail page with query parameters
    window.location.href = `product-detail.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(description)}`;
  }
    });
  }
  

  // Call the displayProducts function when the page loads
  window.onload = displayProducts;

// Function to filter products based on search input
function filterProducts() {
  const searchTerm = document.getElementById('search').value.toLowerCase();
  
  // Filter products that match the search term in the title
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm)
  );
  
  // If no products match, display a message
  if (filteredProducts.length === 0) {
    document.getElementById('product-container').innerHTML = '<p>No products found</p>';
  } else {
    // Display the filtered products
    displayProducts(filteredProducts);
  }
}

// Event listener for search button
document.getElementById('search-btn').addEventListener('click', filterProducts);

// Display all products initially (ensure 'products' is defined before this)
window.onload = () => {
  console.log('Products array on load:', products); // Debugging log
  displayProducts(products);  // Make sure products is defined and available
};

