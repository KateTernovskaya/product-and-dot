window.addEventListener('click', function (event) {
//Удаление товара из корзины
    if (event.target.className === 'delete') {
        const productItem = event.target.closest('.product__item');
        productItem.remove();
    }
})



