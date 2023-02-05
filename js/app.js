let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = 'images/jupiter1.svg';
if(btn1.onclick="changeText();") {
     document.getElementById('p1').innerHTML = "Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/jupiter2.svg';
if(btn2.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.";
}
})
btn3.addEventListener('click', () => {
    img.src = 'images/jupiter3.svg';
if(btn3.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    }
})
