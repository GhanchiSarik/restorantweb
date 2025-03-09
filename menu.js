document.addEventListener("DOMContentLoaded", function () {
    const menuItems = [
        {
            name: "Truffle Mushroom Risotto",
            description: "Creamy risotto infused with truffle oil and wild mushrooms, topped with parmesan.",
            price: "$34.99",
            image: "images/mushroom_risotto.jpg"
        },
        {
            name: "Stuffed Bell Peppers",
            description: "Oven-roasted bell peppers stuffed with quinoa, vegetables, and herbs.",
            price: "$24.99",
            image: "images/stuffed_peppers.jpg"
        },
        {
            name: "Saffron-infused Paneer Tikka",
            description: "Cottage cheese marinated in saffron yogurt and grilled to perfection.",
            price: "$29.99",
            image: "https://c.ndtvimg.com/2023-09/2fugrm2_paneer-tikka_625x300_18_September_23.jpg"
        },
        {
            name: "Exotic Veg Sushi Platter",
            description: "A selection of avocado, cucumber, and mango sushi rolls with soy glaze.",
            price: "$39.99",
            image: "https://www.justonecookbook.com/wp-content/uploads/2023/05/Vegetarian-Sushi-Rolls-9707-I-1.jpg"
        },
        {
            name: "Belgian Chocolate Lava Cake",
            description: "Rich chocolate cake with a molten center, served with vanilla bean ice cream.",
            price: "$19.99",
            image: "https://www.melskitchencafe.com/wp-content/uploads/2023/01/updated-lava-cakes7.jpg"
        }
    ];

    const menuContainer = document.getElementById("menu-items");

    menuItems.forEach(item => {
        const menuItem = document.createElement("div");
        menuItem.classList.add("col-lg-4", "col-md-6", "col-sm-12", "menu-item");

        menuItem.innerHTML = `
            <div class="card shadow-lg border-0 rounded-4 h-100">
                <img src="${item.image}" alt="${item.name}" class="card-img-top img-fluid rounded-top">
                <div class="card-body text-center">
                    <h5 class="card-title fw-bold">${item.name}</h5>
                    <p class="card-text text-muted">${item.description}</p>
                    <div class="price text-success fw-bold fs-5">${item.price}</div>
                </div>
            </div>
        `;

        menuContainer.appendChild(menuItem);
    });
});
