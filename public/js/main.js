// variables
const navborBtn = document.getElementById("mav-icon")
const navbor = document.getElementById("navbor")

navborBtn.addEventListener("click", () => {
    navbor.classList.toggle("res-navbor-hid")
})