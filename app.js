
const listitems = document.querySelectorAll("li");
const nav = document.querySelector(".site-nav");

const home = document.querySelector('#home');
const about = document.querySelector('#about');
const profolio = document.querySelector('#profolio');
const contact = document.querySelector('#contact');
const mainContent = document.querySelector('.main-area');
const tablePosition = document.querySelector('#tablePosition');
const homePosition = document.querySelector('#homePosition');
const contactPosition = document.querySelector('#contactPosition');

const showPosition = function (e, li){
    listitems.forEach(item => {
        if(item.id !== li.id){
            item.style = "background: white;";
        }else{
            console.log('in else')
            console.log(item.id);
            item.style = "background: rgb(180, 216, 191);"
        }
    })

    e.preventDefault();
}

function heightToTop(ele){
    //ele为指定跳转到该位置的DOM节点
    let root = document.body;
    let height = 0;
    do{
        height += ele.offsetTop;
        ele = ele.offsetParent;
    }while( ele !== root )
    return height;
}



home.addEventListener('click', e => {
    window.scrollTo({
        top:heightToTop(homePosition),
        behavior:'smooth'
    });
    showPosition(e, home);
    e.preventDefault();
});



profolio.addEventListener('click', showPosition);

contact.addEventListener('click',  e => {
    window.scrollTo({
        top:heightToTop(contactPosition),
        behavior:'smooth'
    });
    showPosition(e, contact);
    e.preventDefault();
});



about.addEventListener('click', e => {
    window.scrollTo({
        top:heightToTop(tablePosition),
        behavior:'smooth'
    });
    showPosition(e, about);
    e.preventDefault();
});









