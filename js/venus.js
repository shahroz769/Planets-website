let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = 'images/venus1.svg';
if(btn1.onclick="changeText();") {
     document.getElementById('p1').innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/venus2.svg';
if(btn2.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
}
})
btn3.addEventListener('click', () => {
    img.src = 'images/venus3.svg';
if(btn3.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    }
})