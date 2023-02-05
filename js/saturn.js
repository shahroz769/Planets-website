let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

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