new CircleType(document.querySelector('.intro-circle__title'));
new CircleType(document.querySelector('.intro-circle__slogan'));
let whatWeDoCircleTitle = new CircleType(document.querySelector('.what-we-do-circle-title'));

whatWeDoCircleTitle.radius(180);
const burgerLogo = document.querySelector('.burger-logo');
const menuNavList = document.querySelector('.nav ul');
const menuNavItems = document.querySelectorAll('.nav li');
const body = document.body;
//menu
burgerLogo.addEventListener('click', ()=>{
    burgerLogo.classList.toggle('active');
    menuNavList.classList.toggle('active');
    body.classList.toggle('overflow-hidden');
})
menuNavItems.forEach((elem)=>{
    elem.addEventListener('click', ()=>{
        burgerLogo.classList.remove('active');
        menuNavList.classList.remove('active');
        body.classList.remove('overflow-hidden');
    })
})
