const darkMode = () => {
    const darkModeBtn = document.getElementById("darkModeBtn")
    darkModeBtn.title = "Dark mode"
    darkModeBtn.addEventListener("click", () => {
        const body = document.getElementById("body")
        const main = document.getElementById("main")
    
        if(body.classList.contains("darkMode") == false){
            body.classList.add("darkMode")
            darkModeBtn.innerHTML = "<i class='fa-solid fa-sun fa-xl'></i>"
        }else{
            body.classList.remove("darkMode")
            darkModeBtn.innerHTML = "<i class='fa-solid fa-moon fa-xl'></i>"
        }
    })
    
}

darkMode()