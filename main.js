let btnLi = document.getElementById('dropDownMenu');
let menu = document.getElementById('dropMenu');
let body = document.querySelector('body');

btnLi.onclick = function(){
    menu.style.display='flex';
    menu.style.flexDirection = 'row-reverse';
    console.log("block");
};

body.onclick = function(event){
    if (event.target == menu){
        menu.style.display = 'none';
        console.log("none")
    }
};
