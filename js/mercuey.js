let img = document.querySelector('img');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');

btn1.addEventListener('click', () => {
    img.src = 'images/mercury1.svg';
    if (btn1.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    }
})
btn2.addEventListener('click', () => {
    img.src = 'images/mercury2.svg';
    if (btn2.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
    }
})
btn3.addEventListener('click', () => {
    img.src = 'images/mercury3.svg';
    if (btn3.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
    }
})