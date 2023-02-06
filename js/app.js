let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box');
const btnAll = document.querySelectorAll('.box');

btn1.addEventListener('click', () => {
    img.src = 'images/jupiter1.svg';
if(btn1.onclick="changeText();") {
     document.getElementById('p1').innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.";
    }
});
btn2.addEventListener('click', () => {
    img.src = 'images/jupiter2.svg';
if(btn2.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
}
});
btn3.addEventListener('click', () => {
    img.src = 'images/jupiter3.svg';
if(btn3.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    }
});
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_jupiter')?.classList.remove('keep_jupiter');
        btnKeep.classList.add('keep_jupiter');

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
    imgMobile.src = 'images/jupiter1.svg';
if(btn11.onclick="changeText();") {
     document.getElementById('p1').innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.";
    }
});
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/jupiter2.svg';
if(btn22.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
}
});
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/jupiter3.svg';
if(btn33.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    }
});
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_jupiter')?.classList.remove('keep_mobile_jupiter')
        btnKeepMobile.classList.add('keep_mobile_jupiter')
    })
})