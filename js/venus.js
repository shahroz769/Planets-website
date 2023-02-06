let img = document.getElementById('javaimg');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');
let btn3 = document.querySelector('#btn3');
const btnKeep = document.querySelector('.box')
const btnAll = document.querySelectorAll('.box')

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
btnAll.forEach(btnKeep => {
    btnKeep.addEventListener('click', () => {
        document.querySelector('.keep_venus')?.classList.remove('keep_venus');
        btnKeep.classList.add('keep_venus');

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
    imgMobile.src = 'images/venus1.svg';
if(btn11.onclick="changeText();") {
     document.getElementById('p1').innerHTML = "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
    }
})
btn22.addEventListener('click', () => {
    imgMobile.src = 'images/venus2.svg';
if(btn22.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
}
})
btn33.addEventListener('click', () => {
    imgMobile.src = 'images/venus3.svg';
if(btn33.onclick="changeText();") {
    document.getElementById('p1').innerHTML = "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    }
})
btnAllMobile.forEach(btnKeepMobile => {
    btnKeepMobile.addEventListener('click', () => {
        document.querySelector('.keep_mobile_venus')?.classList.remove('keep_mobile_venus')
        btnKeepMobile.classList.add('keep_mobile_venus')
    })
})