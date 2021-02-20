const burgerLogo = document.querySelector('.burger-logo');
const menuNavList = document.querySelector('.nav ul');
const menuNavItems = document.querySelectorAll('.nav li');
const body = document.body;

const homeItems ={
    intro: {
            circleTitle: document.querySelector('.intro-circle__title'),
            circleSlogan: document.querySelector('.intro-circle__slogan'),
    },
    whatWeDo: {
            circleTitle: document.querySelector('.what-we-do-circle-title'),
    },
}
// const portfolioItems = {
//     introPortfolio: {
//         circleTitle: document.querySelector('.portfolio-intro-circle__title'),
//     }
// }



if(homeItems.intro.circleTitle && homeItems.intro.circleSlogan && homeItems.whatWeDo.circleTitle){
    new CircleType(homeItems.intro.circleTitle);
    new CircleType(homeItems.intro.circleSlogan);
    new CircleType(homeItems.whatWeDo.circleTitle);
}

// if(portfolioItems.introPortfolio.circleTitle){
//     new CircleType(portfolioItems.introPortfolio.circleTitle);
// }

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
