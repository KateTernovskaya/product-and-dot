renderItems();

function getTemplateItem(item) {
    let template = `
<div class="product__item">
    <div class="this__product">
        <div class="check__product">
            <label class="check__custom__checkbox">
                <input class="real__checkbox" type="checkbox">
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
                    <img class="icon" src="img/icons/info.svg" alt="Информация">
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
                <img class="like" src="img/icons/like.svg" alt="Нравится" class="icon">
                    <img class="delete" src="img/icons/delete.svg" alt="Удалить" class="icon">
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

function renderItems() {
    let items = [
        {
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
            img: 'img/phone_case.png',
            name: 'Силиконовый чехол картхолдер (отверстия) для карт, прозрачный кейс бампер на Apple iPhone XR, MobiSafe',
            characteristics: {
                color: 'Цвет: прозрачный',
                size: '',
            },
            storage: 'Коледино WB',
            provider: 'OOO Мегапрофстиль',
            count: 200,
            stock: 100,
            price: 10500,
            priceWithSale: 11500
        },
        {
            img: 'img/pencils.png',
            name: 'Карандаши цветные Faber-Castell "Замок", набор 24 цвета, заточенные, шестигранные, Faber-Castell',
            characteristics: {
                color: '',
                size: '',
            },
            storage: 'Коледино WB',
            provider: 'OOO Мегапрофстиль',
            count: 2,
            stock: 4,
            price: 247,
            priceWithSale: 475
        },

    ];

    items.forEach((i) => {
        renderItem(i);
    })
}

