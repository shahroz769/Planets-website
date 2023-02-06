let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box')
const btnAll = document.querySelectorAll('.box')

btn1.addEventListener('click', () => {
    img.src = 'images/saturn1.svg';
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/saturn2.svg';
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
    }
})
btn3.addEventListener('click', () => {
    img.src = 'images/saturn3.svg';
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.";
    }
})
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_saturn')?.classList.remove('keep_saturn');
        btnKeep.classList.add('keep_saturn');

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
    imgMobile.src = 'images/saturn1.svg';
    if (btn11.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.";
    }
})
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/saturn2.svg';
    if (btn22.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.";
    }
})
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/saturn3.svg';
    if (btn33.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.";
    }
})
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_saturn')?.classList.remove('keep_mobile_saturn')
        btnKeepMobile.classList.add('keep_mobile_saturn')
    })
})