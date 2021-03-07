const burgerLogo = document.querySelector('.burger-logo');
const menuNavList = document.querySelector('.nav ul');
const menuNavItems = document.querySelectorAll('.nav li');
const body = document.body;
const animItems = document.querySelectorAll('._anim-item');

const homeItems ={
    intro: {
            circleTitle: document.querySelector('.intro-circle__title'),
            circleSlogan: document.querySelector('.intro-circle__slogan'),
    },
    whatWeDo: {
            circleTitle: document.querySelector('.what-we-do-circle-title'),
    },
}


if(homeItems.intro.circleTitle && homeItems.intro.circleSlogan && homeItems.whatWeDo.circleTitle){
    new CircleType(homeItems.intro.circleTitle);
    new CircleType(homeItems.intro.circleSlogan);
    new CircleType(homeItems.whatWeDo.circleTitle);
}


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


if(animItems.length > 0){
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll(){
        for(let index = 0 ; index < animItems.length; index++){
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if( animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('active');
            }else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('active');
                }
            }
        }
    }
    function offset(el) {
        const rect = el.getBoundingClientRect(),
        scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
        scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    setTimeout(()=>{
        animOnScroll();
    }, 300)
}