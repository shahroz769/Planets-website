let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box')
const btnAll = document.querySelectorAll('.box')

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
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_mercury')?.classList.remove('keep_mercury');
        btnKeep.classList.add('keep_mercury');

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
    imgMobile.src = 'images/mercury1.svg';
    if (btn11.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    }
})
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/mercury2.svg';
    if (btn22.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
    }
})
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/mercury3.svg';
    if (btn33.onclick = "changeText();") {
        document.getElementById('p1').innerHTML = "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
    }
})
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_mercury')?.classList.remove('keep_mobile_mercury')
        btnKeepMobile.classList.add('keep_mobile_mercury')
    })
})