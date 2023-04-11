let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box')
const btnAll = document.querySelectorAll('.box')

btn1.addEventListener('click', () => {
    if (!img.src.includes('earth1')) {
        gsap.fromTo('#javaimg', { 'clip-path': 'circle(100.5% at 50% 100%)' }, { 'clip-path': 'circle(0% at 50% 100%)', ease: "power4.inOut", duration: 1 })
    }
        setTimeout(() => {
            gsap.set(img, { attr: { src: 'images/earth1.svg' } });
            gsap.fromTo('#javaimg', { 'clip-path': 'circle(0% at 50% 100%)' }, { 'clip-path': 'circle(100.5% at 50% 100%)', ease: "power4.inOut", duration: 1 })
        }
            , 999);
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
    }
    gsap.fromTo('#p1', { opacity: 0 }, { opacity: 1, ease: "power4.inOut", duration: 1 })
})
btn2.addEventListener('click', () => {
    if (!img.src.includes('earth2')) {
        gsap.fromTo('#javaimg', { 'clip-path': 'circle(100.5% at 50% 100%)' }, { 'clip-path': 'circle(0% at 50% 100%)', ease: "power4.inOut", duration: 1 })
    }
    setTimeout(() => {
        gsap.set(img, { attr: { src: 'images/earth2.svg' } });
        gsap.fromTo('#javaimg', { 'clip-path': 'circle(0% at 50% 100%)' }, { 'clip-path': 'circle(100.5% at 50% 100%)', ease: "power4.inOut", duration: 1 })
    }
        , 999);
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
    }
    gsap.fromTo('#p1', { opacity: 0 }, { opacity: 1, ease: "power4.inOut", duration: 1 })
})
btn3.addEventListener('click', () => {
    if (!img.src.includes('earth3')) {
        gsap.fromTo('#javaimg', { 'clip-path': 'circle(100.5% at 50% 100%)' }, { 'clip-path': 'circle(0% at 50% 100%)', ease: "power4.inOut", duration: 1 })
    }
    setTimeout(() => {
        gsap.set(img, { attr: { src: 'images/earth3.svg' } });
        gsap.fromTo('#javaimg', { 'clip-path': 'circle(0% at 50% 100%)' }, { 'clip-path': 'circle(100.5% at 50% 100%)', ease: "power4.inOut", duration: 1 })
    }
        , 999);
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
    }
    gsap.fromTo('#p1', { opacity: 0 }, { opacity: 1, ease: "power4.inOut", duration: 1 })
})
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_earth')?.classList.remove('keep_earth');
        btnKeep.classList.add('keep_earth');

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
    imgMobile.src = 'images/earth1.svg';
    if (btn11.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
    }
})
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/earth2.svg';
    if (btn22.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
    }
})
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/earth3.svg';
    if (btn33.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
    }
})
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_earth')?.classList.remove('keep_mobile_earth')
        btnKeepMobile.classList.add('keep_mobile_earth')
    })
})
let earth_h1 = new SplitType('.earth_h1')
var tl = gsap.timeline({ defaults: { duration: 1 } })
tl
    .to('.header', { opacity: 1, y: 0, ease: "power4.out" }, '+=.15')
    .to('.navbar-nav a', { opacity: 1, y: 0, ease: "power4.out", stagger: .1 }, '-=.65')
    .to('.brand', { opacity: 1, y: 0, ease: "power4.out" }, '-=1.75')
    .to('#javaimg', { 'clip-path': 'circle(100.5% at 50% 100%)', duration: 1.25, ease: "power4.out" }, '-=.65')
    .to('.earth_h1', { opacity: 1, duration: .001 }, '-=1.25')
    .to('.char', { y: 0, stagger: 0.08, ease: "power4.inOut", duration: 1.5 }, '-=1.25')
    .to('#p1 , .source', { y: 0, opacity: 1, ease: "power4.inOut", stagger: .2 }, '-=.85')
    .to('.box', { y: 0, opacity: 1, ease: "power4.out", stagger: .2 }, '-=.3')
    .to('.rect', { y: 0, opacity: 1, ease: "power4.out", stagger: .2 }, '-=1.3')