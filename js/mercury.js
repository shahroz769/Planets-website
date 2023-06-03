let img = document.getElementById("javaimg");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
const btnKeep = document.querySelector(".box");
const btnAll = document.querySelectorAll(".box");

btn1.addEventListener("click", () => {
    if (img.src.includes("mercury1")) {
        return;
    } else {
        if (!img.src.includes("mercury1")) {
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
            gsap.set(img, { attr: { src: "images/mercury1.svg" } });
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
                    "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
            }
        }, 300);
    }
});
btn2.addEventListener("click", () => {
    if (img.src.includes("mercury2")) {
        return;
    } else {
        if (!img.src.includes("mercury2")) {
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
            gsap.set(img, { attr: { src: "images/mercury2.svg" } });
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
                "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
        }
        gsap.fromTo(
            "#p1",
            { opacity: 0 },
            { opacity: 1, ease: "power4.inOut", duration: 1 }
        );
    }
});
btn3.addEventListener("click", () => {
    if (img.src.includes("mercury3")) {
        return;
    } else {
        if (!img.src.includes("mercury3")) {
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
            gsap.set(img, { attr: { src: "images/mercury3.svg" } });
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
                "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
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
        document
            .querySelector(".keep_mercury")
            ?.classList.remove("keep_mercury");
        btnKeep.classList.add("keep_mercury");
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
    imgMobile.src = "images/mercury1.svg";
    if ((btn11.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.";
    }
});
btn22.addEventListener("click", () => {
    imgMobile.src = "images/mercury2.svg";
    if ((btn22.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.";
    }
});
btn33.addEventListener("click", () => {
    imgMobile.src = "images/mercury3.svg";
    if ((btn33.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.";
    }
});
btnAllMobile.forEach((btnKeepMobile) => {
    btnKeepMobile.addEventListener("click", () => {
        document
            .querySelector(".keep_mobile_mercury")
            ?.classList.remove("keep_mobile_mercury");
        btnKeepMobile.classList.add("keep_mobile_mercury");
    });
});
let mercury_h1 = new SplitType(".mercury_h1");
var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.to("#javaimg", {
    "clip-path": "circle(100.5% at 50% 100%)",
    duration: 1.25,
    ease: "power4.out",
})
    .to(".mercury_h1", { opacity: 1, duration: 0.001 }, "-=1.25")
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
