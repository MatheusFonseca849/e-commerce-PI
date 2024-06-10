import { productDatabase, shoppingCartArray } from "./database.js";
import { createCard, createPurchasedCard } from "./cards.js";

export function appendCard(object, htmlReference){
    let card = createCard(object)
    htmlReference.append(card)
}

export function appendPurchasedCard(object, htmlReference){
    let card = createPurchasedCard(object)
    htmlReference.append(card)
}

export function showAllProducts(){

    let shoppingWindow = document.getElementById("productList")
    shoppingWindow.innerHTML = ""

    productDatabase.forEach((product) => {
        appendCard(product, shoppingWindow)
    })
}

export function showShoppingCart(){
    let shoppingCart = document.getElementById("shoppingCart")
    shoppingCart.innerHTML = ""

    shoppingCartArray.forEach((product) => {
        appendPurchasedCard(product, shoppingCart)
    })
}

showAllProducts()

showShoppingCart()