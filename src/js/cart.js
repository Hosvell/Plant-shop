const cartWrapper = document.querySelector('.item-product-list')


window.addEventListener('click', (event) => {

  // проверяем, что клик был словершен по кнопке "order"
  if (event.target.hasAttribute('data-cart')) {

    // находим карточку с товаром, внутри которой был создан клик
    const card = event.target.closest('.item-product')

    // собираем данные этого товара и записываем их в единый объект productInfo
    const productInfo = {
      id: card.dataset.id,
      imgSrc: card.querySelector('.prod-img').getAttribute('src'),
      title: card.querySelector('.name-product').innerText,
      description: card.querySelector('.description').innerText,
      price: card.querySelector('.price-current').innerText,
      counter: card.querySelector('[data-counter]').innerText
    }

    const priceCurrent = parseFloat(productInfo.price) * parseFloat(productInfo.counter)

    // проверить если ли такой товар в корзине
    const itemInCart = cartWrapper.querySelector(`[data-id="${productInfo.id}"]`)
    if (itemInCart) {
      const counterElem = itemInCart.querySelector('[data-counter]')
      const priceElem = itemInCart.querySelector('[data-price]')
      counterElem.innerText = parseInt(counterElem.innerText) + parseInt(productInfo.counter)
      priceElem.innerText = parseFloat(priceElem.innerText) + parseFloat(priceCurrent)
    } else {
      // изпользование собранных данных в шаблоне корзины
    const cartItemHTML = `<div class="wrapper-item-cart" data-id="${productInfo.id}">
    <div class="img-product"><img src="${productInfo.imgSrc}" alt=""></div>
        <div class="wrapper-item-prod">
          <div class="name-prod">${productInfo.title}</div>
          <div class="price-prod">Price by $<span data-price>${priceCurrent}</span></div>

          <div class="wrapper-quantity-remove">

            <div class="items-selector-m counter-wrapper">
              <div class="items__control-m" data-action="minus">-</div>
              <div class="items__current-m" data-counter>${productInfo.counter}</div>
              <div class="items__control-m" data-action="plus">+</div>
            </div>

            <button class="btn-black" id="remove-btn">remove</button>

          </div> 
        </div>
      </div> `;
      cartWrapper.insertAdjacentHTML('beforeend', cartItemHTML)
    }

    // обнуление значение карточки продукта 
    card.querySelector('.items__current').innerText = 1


  }
})
