let gnb = document.querySelectorAll(".gnb_menu>li>a");
function toggleClass (e){
    e.preventDefault();
    gnb.forEach((list)=>{
        list.classList.remove("active");
    });
    this.classList.add("active");
}
gnb.forEach((gnbm)=>{
    gnbm.addEventListener("click",toggleClass);
});
