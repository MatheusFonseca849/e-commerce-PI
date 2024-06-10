// const darkMode = () => {
//     const darkModeBtn = document.getElementById("darkModeBtn")
//     darkModeBtn.title = "Dark mode"
//     darkModeBtn.addEventListener("click", () => {
//         const body = document.getElementById("body")
    
//         if(body.classList.contains("darkMode") == false){
//             body.classList.add("darkMode")
//             darkModeBtn.innerHTML = "<i class='fa-solid fa-sun fa-xl'></i>"
//         }else{
//             body.classList.remove("darkMode")
//             darkModeBtn.innerHTML = "<i class='fa-solid fa-moon fa-xl'></i>"
//         }
//     })
    
// }

// darkMode()

const darkModeBtn = document.getElementById("darkModeBtn")

const body = document.getElementById("body")

let darkMode = localStorage.getItem("dark-mode") || "disabled"
console.log(darkMode)

const enableDarkMode = () => {
    body.classList.add("darkMode")
    darkModeBtn.innerHTML = "<i class='fa-solid fa-sun fa-xl'></i>"
    localStorage.setItem("dark-mode", "enabled")
}

const disableDarkMode = () => {
    body.classList.remove("darkMode")
    darkModeBtn.innerHTML = "<i class='fa-solid fa-moon fa-xl'></i>"
    localStorage.setItem("dark-mode", "disabled")
}

if(darkMode === "enabled"){
    enableDarkMode()
}

darkModeBtn.addEventListener("click", () => {
    darkMode = localStorage.getItem("dark-mode")
    if(darkMode === "disabled"){
        enableDarkMode()
    }else{
        disableDarkMode()
    }
})