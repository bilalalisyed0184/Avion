document.addEventListener('DOMContentLoaded', () => {
    const searchBar = document.getElementById('searchBar');
    const productList = document.getElementById('productList');
    const products = [
        // Example product data
        { name: 'Product 1', tags: ['tag1', 'tag2'] },
        { name: 'Product 2', tags: ['tag2', 'tag3'] },
        // ...other products...
    ];

    searchBar.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredProducts = products.filter(product => {
            return product.name.toLowerCase().includes(searchTerm) ||
                   product.tags.some(tag => tag.toLowerCase().includes(searchTerm));
        });
        displayProducts(filteredProducts);
    });

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const productItem = document.createElement('div');
            productItem.textContent = product.name;
            productList.appendChild(productItem);
        });
    }

    // Initial display of products
    displayProducts(products);
});
