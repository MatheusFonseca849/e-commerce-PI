import { appendPurchasedCard } from "./index.js";
import { shoppingCartArray } from "./database.js";

let shoppingCart = document.getElementById("shoppingCart")
let itemCountHtml = document.getElementById("itemCount")
let totalPriceHtml = document.getElementById("totalPrice")

export function showShoppingCart(){
    shoppingCart.innerHTML = ""
    let itemCount = 0
    let totalPrice = 0

    shoppingCartArray.forEach((product) => {
        itemCount = itemCount + product.quantity
        totalPrice = totalPrice + product.price * product.quantity
        appendPurchasedCard(product, shoppingCart)
    })

    itemCountHtml.innerHTML = `Total de itens: ${itemCount}`
    totalPriceHtml.innerHTML = `Valor Total: R$ ${totalPrice.toFixed(2).replace(".", ",")}`
}

export const addItem = (id) => {
    let product = shoppingCartArray.filter(product => product.id == id)
    console.log(product)
    product.quantity = Number(product.quantity) + 1
    // shoppingCartArray = [...shoppingCartArray, product]
}

showShoppingCart()