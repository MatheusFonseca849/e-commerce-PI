import { createCard } from "./cards.js";
import { appendCard } from "./index.js";
import { productDatabase } from "./database.js";

let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
let productList = document.getElementById("productList")

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    productList.innerHTML = ""
    console.log(productDatabase)
    let searchedProducts = productDatabase.filter(product => product.name.includes(searchInput.value) )
    console.log(searchedProducts)
    searchedProducts.forEach(product => appendCard(product, productList))
 
})