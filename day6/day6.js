"use strict";

var products = [
    { id: 1, name: "Laptop", price: 18500, category: "Electronics", quantity: 4 },
    { id: 2, name: "Mouse", price: 180, category: "Electronics", quantity: 25 },
    { id: 3, name: "Notebook", price: 35, category: "Stationery", quantity: 100 },
    { id: 4, name: "Desk Lamp", price: 420, category: "Home", quantity: 0 }
];

var nextId = 5;

function createProduct(name, price, category, quantity) {
    name = typeof name === "string" ? name.trim() : "";
    category = typeof category === "string" ? category.trim() : "";
    price = Number(price);
    quantity = Number(quantity);

    if (!name) return "Error: name is required";
    if (!category) return "Error: category is required";
    if (isNaN(price) || price < 0) return "Error: invalid price";
    if (!Number.isInteger(quantity) || quantity < 0) return "Error: invalid quantity";

    var duplicate = products.some(function(p) {
        return p.name.toLowerCase() === name.toLowerCase();
    });

    if (duplicate) return "Error: product name already exists";

    var product = {
        id: nextId++,
        name: name,
        price: price,
        category: category,
        quantity: quantity
    };

    products.push(product);
    return product;
}

function getAllProducts() {
    return products;
}

function getProductById(id) {
    return products.find(function(p) {
        return p.id === id;
    }) || null;
}

function updateProduct(id, name, price, category, quantity) {
    var product = getProductById(id);

    if (!product) return "Error: product not found";

    if (name && name.trim()) product.name = name.trim();

    if (price !== "" && price !== null) {
        price = Number(price);
        if (isNaN(price) || price < 0) return "Error: invalid price";
        product.price = price;
    }

    if (category && category.trim()) {
        product.category = category.trim();
    }

    if (quantity !== "" && quantity !== null) {
        quantity = Number(quantity);
        if (!Number.isInteger(quantity) || quantity < 0) {
            return "Error: invalid quantity";
        }
        product.quantity = quantity;
    }

    return product;
}

function deleteProduct(id) {
    var index = products.findIndex(function(p) {
        return p.id === id;
    });

    if (index === -1) return "Error: product not found";

    return products.splice(index, 1)[0];
}

function filterProducts(keyword) {
    var term = keyword.trim().toLowerCase();

    return products.filter(function(p) {
        return p.name.toLowerCase().includes(term) ||
               p.category.toLowerCase().includes(term);
    });
}

function getStoreStats() {
    var totalValue = products.reduce(function(sum, p) {
        return sum + p.price * p.quantity;
    }, 0);

    var avgPrice = products.length
        ? products.reduce(function(sum, p) {
            return sum + p.price;
        }, 0) / products.length
        : 0;

    var outOfStock = products.filter(function(p) {
        return p.quantity === 0;
    }).length;

    return {
        totalProducts: products.length,
        totalValue: totalValue,
        avgPrice: avgPrice.toFixed(2),
        outOfStock: outOfStock
    };
}

const store = {
    create: createProduct,
    getAll: getAllProducts,
    getById: getProductById,
    update: updateProduct,
    delete: deleteProduct,
    filter: filterProducts,
    stats: getStoreStats
};


function renderProducts(list) {
    var tableBody = document.getElementById("productsTableBody");

    if (list.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center">No products found</td>
            </tr>
        `;
        return;
    }

    tableBody.innerHTML = list.map(function(product) {
        var status = product.quantity > 0
            ? '<span class="badge bg-success">In Stock</span>'
            : '<span class="badge bg-danger">Out of Stock</span>';

        return `
            <tr>
                <td>${product.id}</td>
                <td>${product.name}</td>
                <td>${product.price.toLocaleString()}</td>
                <td>${product.category}</td>
                <td>${product.quantity}</td>
                <td>${status}</td>
                <td>
                    <button class="btn btn-sm btn-dark me-1"
                        onclick="openUpdateModal(${product.id})">
                        Edit
                    </button>
                    <button class="btn btn-sm btn-danger"
                        onclick="openDeleteModal(${product.id})">
                        Delete
                    </button>
                </td>
            </tr>
        `;
    }).join("");
}

function updateStats() {
    var stats = getStoreStats();

    document.getElementById("totalProducts").textContent = stats.totalProducts;
    document.getElementById("totalValue").textContent =
        Number(stats.totalValue).toLocaleString();
    document.getElementById("avgPrice").textContent = stats.avgPrice;
    document.getElementById("outOfStock").textContent = stats.outOfStock;
}

function refreshUI() {
    renderProducts(products);
    updateStats();
}

document.getElementById("addProductForm").addEventListener("submit", function(e) {
    e.preventDefault();

    var name = document.getElementById("productName").value;
    var price = document.getElementById("productPrice").value;
    var category = document.getElementById("productCategory").value;
    var quantity = document.getElementById("productQuantity").value;

    var result = createProduct(name, price, category, quantity);

    if (typeof result === "string") {
        showMessage(result, "danger");
        return;
    }

    showMessage("Product added successfully.", "success");
    this.reset();
    refreshUI();
});

document.getElementById("searchInput").addEventListener("input", function() {
    renderProducts(filterProducts(this.value));
});

var updateModal = new bootstrap.Modal(document.getElementById("updateModal"));

function openUpdateModal(id) {
    var product = getProductById(id);

    if (!product) return;

    document.getElementById("updateId").value = product.id;
    document.getElementById("updateName").value = product.name;
    document.getElementById("updatePrice").value = product.price;
    document.getElementById("updateCategory").value = product.category;
    document.getElementById("updateQuantity").value = product.quantity;

    updateModal.show();
}

document.getElementById("saveUpdateBtn").addEventListener("click", function() {
    var id = Number(document.getElementById("updateId").value);
    var name = document.getElementById("updateName").value;
    var price = document.getElementById("updatePrice").value;
    var category = document.getElementById("updateCategory").value;
    var quantity = document.getElementById("updateQuantity").value;

    var result = updateProduct(id, name, price, category, quantity);

    if (typeof result === "string") {
        showMessage(result, "danger");
        return;
    }

    updateModal.hide();
    showMessage("Product updated successfully.", "success");
    refreshUI();
});

var deleteModal = new bootstrap.Modal(document.getElementById("deleteModal"));

function openDeleteModal(id) {
    var product = getProductById(id);

    if (!product) return;

    document.getElementById("deleteId").value = product.id;
    document.getElementById("deleteProductName").textContent = product.name;

    deleteModal.show();
}

document.getElementById("confirmDeleteBtn").addEventListener("click", function() {
    var id = Number(document.getElementById("deleteId").value);
    var result = deleteProduct(id);

    if (typeof result === "string") {
        showMessage(result, "danger");
        return;
    }

    deleteModal.hide();
    showMessage("Product deleted successfully.", "success");
    refreshUI();
});

refreshUI();