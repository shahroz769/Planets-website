let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box')
const btnAll = document.querySelectorAll('.box')

btn1.addEventListener('click', () => {
    img.src = 'images/neptune1.svg';
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/neptune2.svg';
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
    }
})
btn3.addEventListener('click', () => {
    img.src = 'images/neptune3.svg';
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
    }
})
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_neptune')?.classList.remove('keep_neptune');
        btnKeep.classList.add('keep_neptune');

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
    imgMobile.src = 'images/neptune1.svg';
    if (btn11.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
    }
})
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/neptune2.svg';
    if (btn22.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
    }
})
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/neptune3.svg';
    if (btn33.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
    }
})
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_neptune')?.classList.remove('keep_mobile_neptune')
        btnKeepMobile.classList.add('keep_mobile_neptune')
    })
})