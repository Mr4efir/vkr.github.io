// Массив для хранения товаров в корзине
let cart = [];

// Функция для добавления товара в корзину
function addToCart(productId) {
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ id: productId, quantity: 1 });
    }

    updateCartDisplay();
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Функция для увеличения количества товара
function increaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product) {
        product.quantity += 1;
        updateCartDisplay();
    }
}

// Функция для уменьшения количества товара
function decreaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        updateCartDisplay();
    } else if (product) {
        removeFromCart(productId);
    }
}

// Функция для обновления отображения корзины
function updateCartDisplay() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <span>Товар ${item.id}</span>
            <div>
                <button onclick="decreaseQuantity(${item.id})">-</button>
                <span>${item.quantity}</span>
                <button onclick="increaseQuantity(${item.id})">+</button>
                <button onclick="removeFromCart(${item.id})">Удалить</button>
            </div>
        `;
        cartDiv.appendChild(productDiv);
    });
}
