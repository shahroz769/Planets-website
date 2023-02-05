let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = 'images/earth1.svg';
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/earth2.svg';
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.";
    }
})
btn3.addEventListener('click', () => {
    img.src = 'images/earth3.svg';
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.";
    }
})