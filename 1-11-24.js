// Create Header
const header = document.createElement('header');
header.style.textAlign = 'center';
header.style.padding = '20px';
header.style.backgroundColor = 'pink';
header.style.color = 'black';
header.style.fontSize = '2em';
header.innerHTML = 'E-Commerce Store';
document.body.appendChild(header);

// Create Main Container for Cards
const cardContainer = document.createElement('div');
cardContainer.style.display = 'flex';
cardContainer.style.flexWrap = 'wrap';
cardContainer.style.justifyContent = 'center';
cardContainer.style.margin = '20px';
document.body.appendChild(cardContainer);

// Product Data
const products = [
    {
        image: "https://manubhai.in/SocialMedia/post_artworks/BJD-1-2Nov2023.jpg",
        title: 'Product 1',
        description: 'Description for Product 1',
        price: '$29.99'
    },
    {
        image: "https://www.wamanharipethesons.com/portalrepository/images/product/WHPS48081_0_r.jpg",
        title: 'Product 2',
        description: 'Description for Product 2',
        price: '$39.99'
    },
    {
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrMXNyw3HePP19HzqGRp76MA9A9cwDmxS1gA&s",
        title: 'Product 3',
        description: 'Description for Product 3',
        price: '$19.99'
    },
    {
        image: "https://img.drz.lazcdn.com/static/bd/p/fd355e1f1ac5fe5b7cefc6d5be857af0.jpg_720x720q80.jpg",
        title: 'Product 4',
        description: 'Description for Product 4',
        price: '$49.99'
    }
];

// Loop through products to create cards
products.forEach(product => {
    const card = document.createElement('div');
    
    // Set base styles for each card
    card.style.border = '1px solid #ddd';
    card.style.borderRadius = '8px';
    card.style.width = '200px';
    card.style.margin = '10px';
    card.style.padding = '10px';
    card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    card.style.backgroundColor = '#fff';
    card.style.transition = 'transform 0.2s, box-shadow 0.2s';
    card.style.overflow = 'hidden';

    // Add hover effect
    card.onmouseover = function() {
        card.style.transform = 'scale(1.05)';
        card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.2)';
    };
    card.onmouseout = function() {
        card.style.transform = 'scale(1)';
        card.style.boxShadow = '0 2px 5px rgba(0, 0, 0, 0.1)';
    };

    card.innerHTML = `
        <img src="${product.image}" alt="${product.title}" style="width: 100%; border-radius: 8px 8px 0 0;">
        <h2 style="font-size: 1.5em; margin: 10px 0;">${product.title}</h2>
        <p style="font-size: 1em; color: #555;">${product.description}</p>
        <p style="font-weight: bold; color: #007bff;">${product.price}</p>
        <button style="
            background-color: #007bff; 
            color: white; 
            border: none; 
            border-radius: 5px; 
            padding: 10px; 
            font-size: 1em; 
            transition: background-color 0.3s;">
            Buy Now
        </button>
    `;

    // Add button hover effect
    const button = card.querySelector('button');
    button.onmouseover = function() {
        button.style.backgroundColor = 'black'; // Darker blue on hover
    };
    button.onmouseout = function() {
        button.style.backgroundColor = 'black'; // Original blue
    };

    cardContainer.appendChild(card);
});

// Create Footer
const footer = document.createElement('footer');
footer.style.textAlign = 'center';
footer.style.padding = '20px';
footer.style.backgroundColor = 'pink';
footer.style.color = 'black';
footer.style.fontSize = '1em';
footer.innerHTML = '&copy; 2024 E-Commerce Store. All rights reserved.';
document.body.appendChild(footer);