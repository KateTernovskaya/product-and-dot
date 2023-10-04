window.addEventListener('DOMContentLoaded', () => {
//массив продуктов в корзине
    let items = [
        {
            id: 1,
            checked: true,
            img: 'img/T-shirts.png',
            name: 'Футболка UZcotton мужская',
            characteristics: {
                color: 'Цвет: белый',
                size: 'Размер: 56',
            },
            storage: 'Коледино WB',
            provider: 'OOO Мегапрофстиль',
            count: 1,
            stock: 2,
            price: 522,
            priceWithSale: 1051
        },
        {
            id: 2,
            checked: true,
            img: 'img/phone_case.png',
            name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
            characteristics: {
                color: 'Цвет: прозрачный',
                size: '',
            },
            storage: 'Коледино WB',
            provider: 'OOO Мегапрофстиль',
            count: 200,
            stock: 1000,
            price: 11500,
            priceWithSale: 10500,
        },
        {
            id: 3,
            checked: true,
            img: 'img/pencils.png',
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
            characteristics: {
                color: '',
                size: '',
            },
            storage: 'Коледино WB',
            provider: 'OOO Мегапрофстиль',
            count: 2,
            stock: 2,
            price: 247,
            priceWithSale: 475
        },
    ];

//Отображение элементов на странице
    function renderItems() {
        items.forEach((i) => {
            renderItem(i);
        })
        productInBasket()
        listenerPlusMinusBtn()
        renderCountAndPrice()
    }

    renderItems();

    function getTemplateItem(item) {
        let checked = ''
        if (item.checked) {
            checked = "checked"
        }
        let template = `
<div class="product__item product__item_` + item.id + `">
    <div class="this__product">
        <div class="check__product">
            <label class="check__custom__checkbox">
                <input class="real__checkbox checkbox" type="checkbox" 
                ` + checked + `>
                    <span class="custom__checkbox"></span>
            </label>
            <div class="product__img">
                <img src="` + item.img + `" alt="">
            </div>
        </div>
        <div class="product__item__character">
            <div class="product__info">
                <div class="product__name">` + item.name + `
                </div>
                <div class="product__characteristics">
                    <div class="color">` + item.characteristics.color + `</div>
                    <div class="size">` + item.characteristics.size + `</div>
                </div>
                <div class="product__storage">` + item.storage + `</div>
                <div class="product__provider">
                    ` + item.provider + `
                    <a href="#" class="tooltip__provider"> 
                    <img class="icon"  src="img/icons/info.svg" alt="Информация">
                    <div class="tooltip__provider__info">
                    <span class="ooo">OOO «МЕГАПРОФСТИЛЬ»</span>
                    <span class="ogrn">ОГРН: 5167746237148</span>
                    <span class="provider__adress">129337, Москва, улица Красная Сосна, 2, корпус 1, стр. 1, помещение 2, офис 34</span>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
    <div class="this__product__result">
        <div class="product__quantity">
            <div class="product__counter">
                <button type="button" class="btn-minus">–</button>
                <span class="count">` + item.count + `</span>
                <button type="button" class="btn-plus">+</button>
            </div>`
        if (item.stock < 5) {
            template += `
            <div class="count__warning">Осталось
                <div class="count__warning_product">` + item.stock + `</div> шт.
            </div> 
`
        } else {
            template += `
        <div class="count__warning">
            <div class="count__warning_product"></div>
        </div>`

        }
        template += `
            <div class="item__control">
                <svg class="like" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.03396 4.05857C2.26589 4.75224 1.76684 5.83284 1.99493 7.42928C2.22332 9.02783 3.26494 10.6852 4.80436 12.3478C6.25865 13.9184 8.10962 15.4437 9.99996 16.874C11.8903 15.4437 13.7413 13.9184 15.1956 12.3478C16.735 10.6852 17.7766 9.02783 18.005 7.4293C18.233 5.83285 17.734 4.75224 16.9659 4.05856C16.1766 3.34572 15.055 3 14 3C12.1319 3 11.0923 4.08479 10.5177 4.68443C10.4581 4.7466 10.4035 4.80356 10.3535 4.85355C10.1582 5.04882 9.84166 5.04882 9.6464 4.85355C9.59641 4.80356 9.54182 4.7466 9.48224 4.68443C8.90757 4.08479 7.86797 3 5.99995 3C4.94495 3 3.82325 3.34573 3.03396 4.05857ZM2.36371 3.31643C3.37369 2.40427 4.75202 2 5.99995 2C8.07123 2 9.34539 3.11257 9.99996 3.77862C10.6545 3.11257 11.9287 2 14 2C15.2479 2 16.6262 2.40428 17.6362 3.31644C18.6674 4.24776 19.2668 5.66715 18.9949 7.5707C18.7233 9.47217 17.5149 11.3148 15.9294 13.0272C14.3355 14.7486 12.3064 16.3952 10.3 17.9C10.1222 18.0333 9.87773 18.0333 9.69995 17.9C7.69353 16.3952 5.66443 14.7485 4.0706 13.0272C2.48503 11.3148 1.27665 9.47217 1.00498 7.57072C0.733012 5.66716 1.33249 4.24776 2.36371 3.31643Z" fill="black"/>
                </svg>
                <svg class="delete" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 5C2.5 4.72386 2.72386 4.5 3 4.5H17C17.2761 4.5 17.5 4.72386 17.5 5C17.5 5.27614 17.2761 5.5 17 5.5H3C2.72386 5.5 2.5 5.27614 2.5 5Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.4584 4.5H16.5059L15.6411 15.6926C15.5405 16.9947 14.4546 18 13.1486 18H6.84639C5.54299 18 4.45829 16.9986 4.35435 15.6994L3.4584 4.5ZM4.5416 5.5L5.35117 15.6196C5.41353 16.3992 6.06435 17 6.84639 17H13.1486C13.9322 17 14.5837 16.3968 14.6441 15.6155L15.4256 5.5H4.5416Z" fill="black"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M13 5.5H7V3.46875C7 2.65758 7.65758 2 8.46875 2H11.5312C12.3424 2 13 2.65758 13 3.46875V5.5ZM8.46875 3C8.20987 3 8 3.20987 8 3.46875V4.5H12V3.46875C12 3.20987 11.7901 3 11.5312 3H8.46875Z" fill="black"/>
                </svg>
            </div>
        </div>
        <div class="cost__item">
            <div class="cost__with-sale big__sum">
                <span class="price">` + item.price + `</span>
                <span class="currency">сом</span>
            </div>
            <div class="cost__without-sale">
                <span class="price">` + item.priceWithSale + `</span>
                <span class="currency">сом</span>
            </div>
        </div>
    </div>
</div>
    `;

        return template;
    }

    function renderItem(item) {
        const container = document.querySelector('.product__in-basket');

        const template = getTemplateItem(item);
        container.innerHTML += template;
    }

    function renderCountAndPrice() {
        calcCounts()
        calcPrices()
        calcTotals()
    }

//Количество items в корзине
    function productInBasket() {
        const basketCount = document.querySelector('.currency__icon');
        basketCount.innerText = items.length
    }

//Приводим числа к формату с пробелом
    function numberFormat(num) {
        return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

//Считаем стоимость товара в product-item
    function calcPrices() {
        items.forEach((i) => {
            let elem = document.querySelector('.product__item_' + i.id),
                priceWithSale = elem.querySelector('.cost__with-sale .price'),
                priceWithoutSale = elem.querySelector('.cost__without-sale .price');

            priceWithSale.innerHTML = numberFormat(String(i.count * i.priceWithSale));
            priceWithoutSale.innerHTML = numberFormat(String(i.count * i.price));

            if (i.count * i.priceWithSale > 999999) {
                priceWithSale.style.fontSize = '16px';
            }
        })
    }

//Считаем итоговую стоимость в side-bar
    function calcTotals() {
        const totalWithSale = items.reduce((acc, cur) => {
            if (cur.checked) {
                return acc + (cur.priceWithSale * cur.count)
            }
            return acc
        }, 0);

        const total = items.reduce((acc, cur) => {
            if (cur.checked) {
                return acc + (cur.price * cur.count)
            }
            return acc
        }, 0);

        const sale = total - totalWithSale;

        const totalCount = items.reduce((acc, cur) => {
            if (cur.checked) {
                return acc + cur.count
            }
            return acc
        }, 0);


        document.querySelector('.result__sum-for-pay span').innerText = (numberFormat(totalWithSale));
        document.querySelector('.details__result__sum span').innerText = (numberFormat(total));
        document.querySelector('.sum__sale span').innerText = (numberFormat(-sale));
        document.querySelector('.result__quantity__product span').innerText = (numberFormat(totalCount));
    }

//Калькулятор
    function listenerPlusMinusBtn() {
        items.forEach((i) => {
            const productItem = document.querySelector('.product__item_' + i.id);

            const minusBtn = productItem.querySelector('.btn-minus'),
                plusBtn = productItem.querySelector('.btn-plus');

            minusBtn.addEventListener('click', function () {
                if (i.count > 1) {
                    i.count--
                }
                renderCountAndPrice()
            });

            plusBtn.addEventListener('click', function () {
                if (i.count < i.stock) {
                    i.count++
                }
                renderCountAndPrice()
            });
        })
    }

    function calcCounts() {
        items.forEach((i) => {
            const productItem = document.querySelector('.product__item_' + i.id);
            const minusBtn = productItem.querySelector('.btn-minus'),
                plusBtn = productItem.querySelector('.btn-plus');

            if (i.count === 1) {
                minusBtn.disabled = true;
                minusBtn.style.color = 'rgba(0, 0, 0, 0.2)'
            } else {
                minusBtn.disabled = false;
                minusBtn.style.color = 'black'
            }
            if (i.count === i.stock) {
                plusBtn.disabled = true;
                plusBtn.style.color = 'rgba(0, 0, 0, 0.2)'
            } else {
                plusBtn.disabled = false;
                plusBtn.style.color = 'black'
            }

            productItem.querySelector('.count').innerText = i.count;
        })
    }

//Checkbox
    function checkedItem() {
        const mainCheckbox = document.querySelector('.all__checkbox');
        let checkedCount = items.reduce((acc, cur) => {
            if (cur.checked) {
                return acc + 1
            }
        }, 0)
        mainCheckbox.checked = checkedCount === items.length;

        items.forEach((i) => {
            const productItem = document.querySelector('.product__item_' + i.id);
            const checkbox = productItem.querySelector('.checkbox');

            checkbox.addEventListener('change', () => {
                i.checked = !i.checked;
                if (!i.checked) {
                    checkedCount--
                } else {
                    checkedCount++
                }
                if (checkedCount === items.length) {
                    mainCheckbox.checked = true;
                } else {
                    mainCheckbox.checked = false;
                }
                calcTotals()
            });
        })

        mainCheckbox.addEventListener('change', () => {
            items.forEach((i) => {
                const productItem = document.querySelector('.product__item_' + i.id);
                const checkbox = productItem.querySelector('.checkbox');
                checkbox.checked = mainCheckbox.checked;

                i.checked = mainCheckbox.checked;
                if (!i.checked) {
                    checkedCount--
                } else {
                    checkedCount++
                }

                if (mainCheckbox.checked) {
                    checkedCount = items.length
                } else {
                    checkedCount = 0
                }
            })
            calcTotals()
        })
    }

    checkedItem()

//Checkbox на оплату
    document.querySelector('.checkbox__pay').addEventListener('change', () => {
        changeOrderBtnText()
    })

    function changeOrderBtnText() {
        const btn = document.querySelector('.order_btn span');
        const text = document.querySelector('.result__sum-for-pay');
        const checkbox = document.querySelector('.checkbox__pay');
        const checkInfo = document.querySelector('.result__payment__info');


        if (checkbox.checked) {
            btn.innerText = `Оплатить ${text.innerText}`
            checkInfo.style.display = 'none'
        } else {
            btn.innerText = "Заказать";
            checkInfo.style.display = 'block'
        }
    }

//Количество товара при скрытой корзине
    document.querySelector('.check__all__items img').addEventListener('click', () => {
        changeBasketText()
    })

    function changeBasketText() {
        const block = document.querySelector('.basket__items details');
        const text = document.querySelector('.check__all__items label');
        const sumPay = document.querySelector('.result__sum-for-pay');
        const count = document.querySelector('.result__quantity__product span');

        if (block.hasAttribute('open')) {
            text.innerText = `${count.innerText} товара · ${sumPay.innerText} сом`;
            text.style.cssText = 'font-weight: 600; '

        } else {
            text.innerHTML = `
            <label class="check__custom__checkbox check__all">
                <input class="real__checkbox all__checkbox" type="checkbox">
                <span class="custom__checkbox"></span>
                Выбрать все
            </label>
            `
            text.style.cssText = 'font-weight: 400;'
            checkedItem()
        }
    }

//Удаление товара из корзины
    function deleteItem() {
        items.forEach((i) => {
            const productItem = document.querySelector('.product__item_' + i.id);
            const deleteBtn = productItem.querySelector('.delete');

            deleteBtn.addEventListener('click', () => {
                const index = items.indexOf(i);
                items.splice(index, 1)
                productItem.remove();
                productInBasket()
                calcTotals()
            })
        })
    }

    deleteItem()

//Удаление товара из stop list
    function deleteStopItem() {
        const stopItem = document.querySelectorAll('.stop__item');
        stopItem.forEach((i) => {
            const deleteBtn = i.querySelector('.delete');
            deleteBtn.addEventListener('click', () => {
                i.remove();
            })
        })
    }

    deleteStopItem()

//Форма
    const form = document.querySelector('.data__customer__form');
    const inputBlock = form.querySelectorAll('.input__block');

    function showInputName() {
        inputBlock.forEach((i) => {
            const input = i.querySelector('input');
            const inputName = i.querySelector('.input__name');
            input.addEventListener('focus', () => {
                inputName.style.opacity = '1';
            })
            input.addEventListener('blur', () => {
                inputName.style.opacity = '0';

            })
        })
    }

    showInputName();

    function formVerification() {
        inputBlock.forEach((i) => {
            const input = i.querySelector('input');
            const inputName = i.querySelector('.input__name');
            const inputWarning = i.querySelector('.input__warning');
            const email = i.querySelector('.customer__email');
            let tel = i.querySelector('.customer__tel');
            const inn = i.querySelector('.customer__inn');

            function getWarning() {
                inputName.style.color = 'rgba(255, 59, 48, 1)'
                input.style.borderBottom = "1px solid rgba(255, 59, 48, 1)"
                inputWarning.style.opacity = '1'
            }

            function removeWarning() {
                inputName.style.color = 'rgba(151, 151, 175, 1)'
                inputWarning.style.opacity = '0'
                input.style.borderBottom = "1px solid rgba(0, 0, 0, 0.20)"
            }

//Проверяем на пустую строку
            function validateInput() {
                if (input.value === '') {
                    getWarning();
                    if (window.innerWidth < 1000) {
                        form.scrollIntoView({behavior: "smooth"});
                    }
                } else {
                    removeWarning()
                }
            }

//Проверяем почту
            function validateEmail() {
                const reg = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
                if (email !== null) {
                    if (reg.test(email.value)) {
                        removeWarning()
                    } else {
                        getWarning()
                    }
                }
            }

//Проверяем номер телефона
            function validateTel() {
                const reg = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;

                if (tel !== null) {
                    if (reg.test(tel.value)) {
                        removeWarning()
                        tel.value = tel.value.replace(/(\d{1})(\d{3})(\d{3})(\d{2})(\d{2})$/, '+7 $2 $3 $4 $5')
                    } else {
                        getWarning()
                    }
                }
            }

            function validateInn() {
                const regNum = /^\d{14}$/;
                const regStr = !/[a-zA-Zа-яА-Я]/;

                if (inn !== null) {
                    if (regNum.test(inn.value) && regStr.test(inn.value)) {
                        removeWarning()
                        i.querySelector('.input__info').style.display = 'block'

                    } else {
                        i.querySelector('.input__info').style.display = 'none'
                        getWarning()
                    }
                }
            }

            form.addEventListener('submit', (event) => {
                event.preventDefault()
                validateInput()
                validateEmail()
                validateTel()
                validateInn()


                if (email !== null) {
                    email.addEventListener('keyup', function () {
                        validateEmail()
                    })
                }
                if (tel !== null) {
                    tel.addEventListener('keyup', function () {
                        validateTel()
                    })
                }
                if (inn !== null) {
                    inn.addEventListener('keyup', function () {
                        validateInn()
                    })
                }
            })
        })
    }

    formVerification();


//Modal
    const modalTriggerPayment = document.querySelectorAll('.change__pay');
    const modalPayment = document.querySelector('.modal__payment')
    const modalTriggerDelivery = document.querySelectorAll('.change__delivery');
    const modalDelivery = document.querySelector('.modal__delivery');
    const modalClose = document.querySelectorAll('.modal__close');

    function openModal(modal) {
        modal.classList.remove('no__show');
        modal.classList.add('show');
        document.body.style.overflow = "hidden";
    }

    function closeModal(modal) {
        modal.classList.remove('show');
        modal.classList.add('no__show');
        document.body.style.overflow = "";
    }

    function modal(modalTrigger, modalBlock, modalClose) {
        modalTrigger.forEach((btn) => {
            btn.addEventListener('click', () => openModal(modalBlock))
        });

        modalClose.forEach((btn) => {
            btn.addEventListener('click', () => closeModal(modalBlock))
        })

        modalBlock.addEventListener('click', (e) => {
            if (e.target === modalBlock) {
                closeModal(modalBlock);
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.code === 'Escape' && modalBlock.classList.contains('show')) {
                closeModal(modalBlock);
            }
        });
    }

    modal(modalTriggerPayment, modalPayment, modalClose);
    modal(modalTriggerDelivery, modalDelivery, modalClose)


})
