// Массив для хранения товаров в корзине
let cart = [];

// Функция для добавления товара в корзину
function addToCart(productId) {
    // Проверяем, есть ли уже товар в корзине
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        // Если товар уже в корзине, увеличиваем количество
        existingProduct.quantity += 1;
    } else {
        // Если товара нет в корзине, добавляем его с количеством 1
        cart.push({ id: productId, quantity: 1 });
    }

    // Обновляем отображение корзины
    updateCartDisplay();
}

// Функция для удаления товара из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCartDisplay();
}

// Функция для обновления отображения корзины
function updateCartDisplay() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';

    cart.forEach(item => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('cart-item');
        productDiv.innerHTML = `
            <span>Товар ${item.id} (Количество: ${item.quantity})</span>
            <button onclick="removeFromCart(${item.id})">Удалить</button>
        `;
        cartDiv.appendChild(productDiv);
    });
}
