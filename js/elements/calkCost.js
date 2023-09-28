//Подсчитываем стоимость товара
function calkItemPrice() {
    const productItems = document.querySelectorAll('.product__item');
    //console.log(productItems)

    productItems.forEach(function (i) {
        //console.log(i)

        let countProduct = i.querySelector('.count').innerText,
            //costWithSale = i.querySelector('.cost__with-sale .money'),
            //costWithOutSale = i.querySelector('.cost__without-sale .money'),
            priceWithSale = i.querySelector('.cost__with-sale .price').innerText,
            priceWithOutSale = i.querySelector('.cost__without-sale .price').innerText;


        let costWithSale = +countProduct * +priceWithSale;
        let costWithOutSale = +countProduct * +priceWithOutSale;

        console.log(costWithSale)
        console.log(costWithOutSale)
    });

}


