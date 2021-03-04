let open = document.querySelector(".container header span")
let modal = document.querySelector(".container #modalMobile");
let close = document.querySelector(".container #modalMobile .header span");
open.addEventListener("click", function(){
    modal.classList.remove("hide");
});
close.addEventListener("click", function(){
    modal.classList.add("hide");
});