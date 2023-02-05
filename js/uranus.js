let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = 'images/uranus1.svg';
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/uranus2.svg';
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
    }
})
btn3.addEventListener('click', () => {
    img.src = 'images/uranus3.svg';
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.";
    }
})