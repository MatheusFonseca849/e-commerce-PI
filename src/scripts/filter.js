import { appendCard, showAllProducts } from "../scripts/index.js";
import { productDatabase } from "../scripts/database.js";

const filterByCategory = (category) => {
    let productList = document.getElementById("productList")
    productList.innerHTML = ""

    let filteredArray = productDatabase.filter((product) => product.category == category)
    filteredArray.forEach((product) => {
        appendCard(product, productList)
    })
}

let navBtns = document.querySelectorAll(".navBtn")
console.log(navBtns)
navBtns.forEach(navBtn => {
    if(navBtn.id === "all"){
        navBtn.addEventListener("click", () => {
            showAllProducts()
        })
    }else{
        navBtn.addEventListener("click", () => {
            filterByCategory(navBtn.id)
        })
    }
})