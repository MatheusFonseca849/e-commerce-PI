import { addItem } from "./shoppingCart.js";

export function createCard(object) {
  let li = document.createElement("li");
  li.classList = "productCard";
  li.title = object.name;

  let imgContainer = document.createElement("div");
  imgContainer.classList = "cardImgContainer";

  let img = document.createElement("img");
  img.src = object.imgPath;
  img.alt = object.name;

  imgContainer.append(img);

  let cardInfo = document.createElement("div");
  cardInfo.classList = "cardInfo";

  let productName = document.createElement("h3");
  productName.innerHTML = object.name;
  productName.title = "Nome do produto";

  let productPlatform = document.createElement("p");
  productPlatform.title = "Plataforma/Fabricante do Produto";

  if (object.category == "games") {
    productPlatform.innerHTML = object.platform;
  } else {
    productPlatform.innerHTML = object.manufacturer;
  }

  let productPrice = document.createElement("span");
  productPrice.innerHTML = `R$ ${object.price.toFixed(2).replace(".", ",")}`;
  productPrice.title = "Preço do Produto";

  cardInfo.append(productName, productPlatform, productPrice);

  let cardBtnContainer = document.createElement("div");
  cardBtnContainer.classList = "cardBtnContainer";

  let addToCartBtn = document.createElement("button");
  addToCartBtn.classList = "btnDefault";
  addToCartBtn.title = "Adicionar ao Carrinho";
  addToCartBtn.innerHTML = "<i class='fa-solid fa-cart-plus'>";
  addToCartBtn.addEventListener("click", () => {
    addItem(object.id)
  })

  let moreInfoBtn = document.createElement("button");
  moreInfoBtn.classList = "btnDefault";
  moreInfoBtn.title = "Mais Informações";
  moreInfoBtn.innerHTML = "<i class='fa-solid fa-plus'>";

  let wishlistBtn = document.createElement("button");
  wishlistBtn.classList = "btnDefault";
  wishlistBtn.title = "Adicionar à lista de desejos";
  wishlistBtn.innerHTML = "<i class='fa-solid fa-heart'>";

  cardBtnContainer.append(addToCartBtn, moreInfoBtn, wishlistBtn);

  li.append(imgContainer, cardInfo, cardBtnContainer);

  return li;
}

export function createPurchasedCard(object) {
  let li = document.createElement("li");
  li.classList = "purchasedProduct";
  li.title = object.name;

  let cardImgContainer = document.createElement("div");
  cardImgContainer.classList = "cardImgContainer";

  let cardImg = document.createElement("img");
  cardImg.src = object.imgPath;
  cardImg.alt = object.name;

  cardImgContainer.append(cardImg);

  let div = document.createElement("div")
  div.classList = "purchasedCardContainer"

  let productInfo = document.createElement("div");
  productInfo.classList = "purchasedProductInfo"

  let productName = document.createElement("h3");
  productName.innerHTML = object.name;

  let productPrice = document.createElement("span");
  productPrice.innerHTML = `R$ ${object.price.toFixed(2).replace(".", ",")}`;

  productInfo.append(productName, productPrice);

  let counter = document.createElement("div");
  counter.classList = "productCounter";

  let counterBtnContainer = document.createElement("div");
  counterBtnContainer.classList = "counterBtnContainer";

  let counterPlusBtn = document.createElement("button");
  counterPlusBtn.classList = "btnDefault counterBtn"
  counterPlusBtn.innerHTML = "+";
  counterPlusBtn.addEventListener("click", () => {
    addItem(object.id)
  })

  let counterMinusBtn = document.createElement("button");
  counterMinusBtn.classList = "btnDefault counterBtn"
  counterMinusBtn.innerHTML = "-";

  counterBtnContainer.append(counterPlusBtn, counterMinusBtn);

  let counterDisplay = document.createElement("span");
  counterDisplay.innerHTML = `Quantidade: 1`;

  counter.append(counterBtnContainer, counterDisplay);

  div.append(productInfo, counter)

  li.append(cardImgContainer, div);

  return li;
}
