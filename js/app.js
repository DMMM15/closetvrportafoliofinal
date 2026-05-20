const themeBtn = document.getElementById("themeBtn");
const body = document.getElementById("body");

themeBtn.addEventListener("click", () => {

    body.classList.toggle("dark-mode");

    if(body.classList.contains("dark-mode")){
        themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    }else{
        themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }

});