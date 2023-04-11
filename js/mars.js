let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box')
const btnAll = document.querySelectorAll('.box')

btn1.addEventListener('click', () => {
    img.src = 'images/mars1.svg';
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".';
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/mars2.svg';
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
    }
})
btn3.addEventListener('click', () => {
    img.src = 'images/mars3.svg';
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
    }
})
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_mars')?.classList.remove('keep_mars');
        btnKeep.classList.add('keep_mars');

    })
});


//--------------------------------------------------MOBILE----BUTTONS----------------------------------------------------


let imgMobile = document.getElementById('javaimg');
let btn11 = document.querySelector('#btn11');
let btn22 = document.querySelector('#btn22');
let btn33 = document.querySelector('#btn33');
const btnKeepMobile = document.querySelector('.mobile_box')
const btnAllMobile = document.querySelectorAll('.mobile_box')

btn11.addEventListener('click', () => {
    imgMobile.src = 'images/mars1.svg';
    if (btn11.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = 'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".';
    }
})
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/mars2.svg';
    if (btn22.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.";
    }
})
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/mars3.svg';
    if (btn33.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.";
    }
})
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_mars')?.classList.remove('keep_mobile_mars')
        btnKeepMobile.classList.add('keep_mobile_mars')
    })
})
let mars_h1 = new SplitType('.mars_h1')
var tl = gsap.timeline({ defaults: { duration: 1 }})
tl
    .to('.header', { opacity: 1, y: 0, ease: "power4.out" },'+=.15')
    .to('.navbar-nav a', { opacity: 1, y: 0, ease: "power4.out", stagger: .1 }, '-=.65')
    .to('.brand', { opacity: 1, y: 0, ease: "power4.out"}, '-=1.75')
    .to('#javaimg', { 'clip-path': 'circle(100.5% at 50% 100%)',duration : 1.25, ease: "power4.out" }, '-=.65')
    .to('.mars_h1', { opacity: 1, duration: .001 }, '-=1.25')
    .to('.char', { y: 0, stagger: 0.08, ease: "power4.inOut", duration: 1.5 }, '-=1.25')
    .to('#p1 , .source', { y: 0, opacity: 1, ease: "power4.inOut", stagger: .2 }, '-=.85')
    .to('.box', { y: 0, opacity: 1, ease: "power4.out", stagger: .2 }, '-=.3')
    .to('.rect', { y: 0, opacity: 1, ease: "power4.out", stagger: .2 }, '-=1.3')