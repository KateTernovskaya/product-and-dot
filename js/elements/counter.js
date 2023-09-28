//Количество товара в корзине
window.addEventListener('click', function (event) {
    let count;

    if (event.target.className === 'btn-minus' || event.target.className === 'btn-plus') {
        const countWrapper = event.target.closest('.product__quantity')
        const countWarning = countWrapper.querySelector('.count__warning_product');

        const btnMinus = countWrapper.querySelector('.btn-minus'),
            btnPlus = countWrapper.querySelector('.btn-plus')

        count = countWrapper.querySelector('.count');

        if (event.target.className === 'btn-minus') {
            if (+count.innerText === 1) {
                btnMinus.style.color = 'rgba(0, 0, 0, 0.2)'
            } else {
                count.innerText = --count.innerText;
                btnPlus.style.color = 'black'
            }
        }

        if (event.target.className === 'btn-plus') {
            if (+count.innerText !== +countWarning.innerText) {
                count.innerText = ++count.innerText;
                btnMinus.style.color = 'black'
            } else {
                btnPlus.style.color = 'rgba(0, 0, 0, 0.2)'
            }
        }
    }
})




