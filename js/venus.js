let img = document.getElementById("javaimg");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
const btnKeep = document.querySelector(".box");
const btnAll = document.querySelectorAll(".box");

btn1.addEventListener("click", () => {
    if (img.src.includes("venus1")) {
        return;
    } else {
        if (!img.src.includes("venus1")) {
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
            gsap.set(img, { attr: { src: "images/venus1.svg" } });
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
                    "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
            }
        }, 300);
    }
});
btn2.addEventListener("click", () => {
    if (img.src.includes("venus2")) {
        return;
    } else {
        if (!img.src.includes("venus2")) {
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
            gsap.set(img, { attr: { src: "images/venus2.svg" } });
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
                "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
        }
        gsap.fromTo(
            "#p1",
            { opacity: 0 },
            { opacity: 1, ease: "power4.inOut", duration: 1 }
        );
    }
});
btn3.addEventListener("click", () => {
    if (img.src.includes("venus3")) {
        return;
    } else {
        if (!img.src.includes("venus3")) {
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
            gsap.set(img, { attr: { src: "images/venus3.svg" } });
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
                "Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.";
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
        document.querySelector(".keep_venus")?.classList.remove("keep_venus");
        btnKeep.classList.add("keep_venus");
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
    imgMobile.src = "images/venus1.svg";
    if ((btn11.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.";
    }
});
btn22.addEventListener("click", () => {
    imgMobile.src = "images/venus2.svg";
    if ((btn22.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.";
    }
});
btn33.addEventListener("click", () => {
    imgMobile.src = "images/venus3.svg";
    if ((btn33.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.";
    }
});
btnAllMobile.forEach((btnKeepMobile) => {
    btnKeepMobile.addEventListener("click", () => {
        document
            .querySelector(".keep_mobile_venus")
            ?.classList.remove("keep_mobile_venus");
        btnKeepMobile.classList.add("keep_mobile_venus");
    });
});
let venus_h1 = new SplitType(".venus_h1");
var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.to("#javaimg", {
    "clip-path": "circle(100.5% at 50% 100%)",
    duration: 1.25,
    ease: "power4.out",
})
    .to(".venus_h1", { opacity: 1, duration: 0.001 }, "-=1.25")
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
