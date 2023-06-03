let img = document.getElementById("javaimg");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
const btnKeep = document.querySelector(".box");
const btnAll = document.querySelectorAll(".box");

btn1.addEventListener("click", () => {
    if (img.src.includes("uranus1")) {
        return;
    } else {
        if (!img.src.includes("uranus1")) {
            gsap.fromTo(
                "#javaimg",
                { "clip-path": "circle(100.5% at 50% 100%)" },
                {
                    "clip-path": "circle(0% at 50% 100%)",
                    ease: "power4.inOut",
                    duration: 1,
                }
            );
        }
        setTimeout(() => {
            gsap.set(img, { attr: { src: "images/uranus1.svg" } });
            gsap.fromTo(
                "#javaimg",
                { "clip-path": "circle(0% at 50% 100%)" },
                {
                    "clip-path": "circle(100.5% at 50% 100%)",
                    ease: "power4.inOut",
                    duration: 1,
                }
            );
        }, 999);
        gsap.to("#p1", {
            opacity: 0,
            y: 10,
            duration: 0.4,
        });
        setTimeout(function () {
            gsap.to("#p1", {
                opacity: 1,
                y: 0,
                duration: 0.4,
            });
            if ((btn1.onclick = "changeText();")) {
                document.getElementById("p1").innerHTML =
                    "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
            }
        }, 300);
    }
});
btn2.addEventListener("click", () => {
    if (img.src.includes("uranus2")) {
        return;
    } else {
        if (!img.src.includes("uranus2")) {
            gsap.fromTo(
                "#javaimg",
                { "clip-path": "circle(100.5% at 50% 100%)" },
                {
                    "clip-path": "circle(0% at 50% 100%)",
                    ease: "power4.inOut",
                    duration: 1,
                }
            );
        }
        setTimeout(() => {
            gsap.set(img, { attr: { src: "images/uranus2.svg" } });
            gsap.fromTo(
                "#javaimg",
                { "clip-path": "circle(0% at 50% 100%)" },
                {
                    "clip-path": "circle(100.5% at 50% 100%)",
                    ease: "power4.inOut",
                    duration: 1,
                }
            );
        }, 999);
        if ((btn1.onclick = "changeText();")) {
            document.getElementById("p1").innerHTML =
                "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
        }
        gsap.fromTo(
            "#p1",
            { opacity: 0 },
            { opacity: 1, ease: "power4.inOut", duration: 1 }
        );
    }
});
btn3.addEventListener("click", () => {
    if (img.src.includes("uranus3")) {
        return;
    } else {
        if (!img.src.includes("uranus3")) {
            gsap.fromTo(
                "#javaimg",
                { "clip-path": "circle(100.5% at 50% 100%)" },
                {
                    "clip-path": "circle(0% at 50% 100%)",
                    ease: "power4.inOut",
                    duration: 1,
                }
            );
        }
        setTimeout(() => {
            gsap.set(img, { attr: { src: "images/uranus3.svg" } });
            gsap.fromTo(
                "#javaimg",
                { "clip-path": "circle(0% at 50% 100%)" },
                {
                    "clip-path": "circle(100.5% at 50% 100%)",
                    ease: "power4.inOut",
                    duration: 1,
                }
            );
        }, 999);
        if ((btn1.onclick = "changeText();")) {
            document.getElementById("p1").innerHTML =
                "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.";
        }
        gsap.fromTo(
            "#p1",
            { opacity: 0 },
            { opacity: 1, ease: "power4.inOut", duration: 1 }
        );
    }
});
btnAll.forEach((btnKeep) => {
    btnKeep.addEventListener("click", () => {
        document.querySelector(".keep_uranus")?.classList.remove("keep_uranus");
        btnKeep.classList.add("keep_uranus");
    });
});

//--------------------------------------------------MOBILE----BUTTONS----------------------------------------------------

let imgMobile = document.getElementById("javaimg");
let btn11 = document.querySelector("#btn11");
let btn22 = document.querySelector("#btn22");
let btn33 = document.querySelector("#btn33");
const btnKeepMobile = document.querySelector(".mobile_box");
const btnAllMobile = document.querySelectorAll(".mobile_box");

btn11.addEventListener("click", () => {
    imgMobile.src = "images/uranus1.svg";
    if ((btn11.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.";
    }
});
btn22.addEventListener("click", () => {
    imgMobile.src = "images/uranus2.svg";
    if ((btn22.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.";
    }
});
btn33.addEventListener("click", () => {
    imgMobile.src = "images/uranus3.svg";
    if ((btn33.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.";
    }
});
btnAllMobile.forEach((btnKeepMobile) => {
    btnKeepMobile.addEventListener("click", () => {
        document
            .querySelector(".keep_mobile_uranus")
            ?.classList.remove("keep_mobile_uranus");
        btnKeepMobile.classList.add("keep_mobile_uranus");
    });
});
let uranus_h1 = new SplitType(".uranus_h1");
var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.to("#javaimg", {
    "clip-path": "circle(100.5% at 50% 100%)",
    duration: 1.25,
    ease: "power4.out",
})
    .to(".uranus_h1", { opacity: 1, duration: 0.001 }, "-=1.25")
    .to(
        ".char",
        { y: 0, stagger: 0.08, ease: "power4.inOut", duration: 1.5 },
        "-=1.25"
    )
    .to(
        "#p1 , .source",
        { y: 0, opacity: 1, ease: "power4.inOut", stagger: 0.2 },
        "-=.85"
    )
    .to(".box", { y: 0, opacity: 1, ease: "power4.out", stagger: 0.2 }, "-=.3")
    .to(
        ".rect",
        { y: 0, opacity: 1, ease: "power4.out", stagger: 0.2 },
        "-=1.3"
    );
