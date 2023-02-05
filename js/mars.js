let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

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