// Simulated product data for 4 products
const products = [
    {
      "id": 1,
      "title": "Wonder Door",
      "price": 29.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      
    },
    {
      "id": 2,
      "title": "Wonder Door",
      "price": 39.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
    },
    {
      "id": 3,
      "title": "Wonder Door",
      "price": 49.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
    },
    {
      "id": 4,
      "title": "Wonder Door",
      "price": 59.99,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
    },
    {
        "id": 5,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 6,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 7,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 8,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      }
      ,
    {
        "id": 9,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 10,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "This is another product description.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 11,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 12,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://realcraft.com/cdn/shop/products/ShakerDoubleFlatPanelMahogany-CenterBar_d3c3b163-99e9-4963-8e2b-cf64c1d41c29_1200x.jpg?v=1722436613"
      },
      {
        "id": 13,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        
      },
      {
        "id": 14,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
      },
      {
        "id": 15,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
      },
      {
        "id": 16,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
      },
      {
          "id": 17,
          "title": "Wonder Door",
          "price": 29.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        },
        {
          "id": 18,
          "title": "Wonder Door",
          "price": 39.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        },
        {
          "id": 19,
          "title": "Wonder Door",
          "price": 49.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        },
        {
          "id": 20,
          "title": "Wonder Door",
          "price": 59.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        }
        ,
      {
          "id": 21,
          "title": "Wonder Door",
          "price": 29.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        },
        {
          "id": 22,
          "title": "Wonder Door",
          "price": 39.99,
          "description": "This is another product description.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        },
        {
          "id": 23,
          "title": "Wonder Door",
          "price": 49.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        },
        {
          "id": 24,
          "title": "Wonder Door",
          "price": 59.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://qiniu.digood-assets-fallback.work/542/1597636023_0107%20smart%20lock%20AJ3051-01.jpg"
        }
        ,
      {
        "id": 25,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
      },
      {
        "id": 26,
        "title": "Wonder Door",
        "price": 29.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        
      },
      {
        "id": 27,
        "title": "Wonder Door",
        "price": 39.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
      },
      {
        "id": 28,
        "title": "Wonder Door",
        "price": 49.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
      },
      {
        "id": 29,
        "title": "Wonder Door",
        "price": 59.99,
        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
      },
      {
          "id": 30,
          "title": "Wonder Door",
          "price": 29.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        },
        {
          "id": 31,
          "title": "Wonder Door",
          "price": 39.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        },
        {
          "id": 32,
          "title": "Wonder Door",
          "price": 49.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        },
        {
          "id": 33,
          "title": "Wonder Door",
          "price": 59.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        }
        ,
      {
          "id": 34,
          "title": "Wonder Door",
          "price": 29.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        },
        {
          "id": 35,
          "title": "Wonder Door",
          "price": 39.99,
          "description": "This is another product description.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        },
        {
          "id": 36,
          "title": "Wonder Door",
          "price": 49.99,
          "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          "image": "https://www.porteitaliane.com/cdn/shop/files/24-Fip-Porta_12_Ciliegio.jpg?v=1721049548&width=1214"
        },
        
  ];

  function displayProducts() {
    const productContainer = document.getElementById('product-container');
    
    let productCards = '';
    // Loop through products and generate cards
    products.forEach((product, index) => {
      productCards += `
        <div id="pd"
  class="product-card relative max-w-xs overflow-hidden group hover:cursor-pointer border-2 border-transparent group-hover:border-blue-500 transform transition-all duration-300"
  data-index="${index}"
>
  <!-- Attach index for easy identification -->

  <!-- Product Image -->
  <img class=" w-full h-100 object-cover transition-transform duration-300" src="${product.image}" alt="${product.title}">

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
    document.getElementById('product-container').innerHTML = productCards;

    // Add click event listener for product cards
    document.getElementById('product-container').addEventListener('click', (event) => {
      const productCard = event.target.closest('.product-card');
      if (productCard) {
        const index = productCard.getAttribute('data-index');
        const product = products[index];
        // Redirect to product detail page with query parameters
        window.location.href = `product-detail.html?title=${encodeURIComponent(product.title)}&price=${encodeURIComponent(product.price)}&image=${encodeURIComponent(product.image)}&description=${encodeURIComponent(product.description)}`;
      }
    });
  
  

    // Insert the generated product cards into the container
    productContainer.innerHTML = productCards;
    
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
  
  // Display the filtered products
  displayProducts(filteredProducts);
}

// Event listener for search button
document.getElementById('search-btn').addEventListener('click', filterProducts);

// Display all products initially
window.onload = () => displayProducts(products);
