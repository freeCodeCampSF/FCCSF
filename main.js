const toggleNav = document.querySelector("#js-navbar-toggle")
const mainNav = document.querySelector(".main-nav")

toggleNav.addEventListener("click", _=>{
    mainNav.classList.toggle("active")
})

