let img = document.getElementById("javaimg");
let btn1 = document.querySelector("#btn1");
let btn2 = document.querySelector("#btn2");
let btn3 = document.querySelector("#btn3");
const btnKeep = document.querySelector(".box");
const btnAll = document.querySelectorAll(".box");

btn1.addEventListener("click", () => {
    if (img.src.includes("neptune1")) {
        return;
    } else {
        if (!img.src.includes("neptune1")) {
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
            gsap.set(img, { attr: { src: "images/neptune1.svg" } });
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
                    "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
            }
        }, 300);
    }
});
btn2.addEventListener("click", () => {
    if (img.src.includes("neptune2")) {
        return;
    } else {
        if (!img.src.includes("neptune2")) {
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
            gsap.set(img, { attr: { src: "images/neptune2.svg" } });
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
                "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
        }
        gsap.fromTo(
            "#p1",
            { opacity: 0 },
            { opacity: 1, ease: "power4.inOut", duration: 1 }
        );
    }
});
btn3.addEventListener("click", () => {
    if (img.src.includes("neptune3")) {
        return;
    } else {
        if (!img.src.includes("neptune3")) {
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
            gsap.set(img, { attr: { src: "images/neptune3.svg" } });
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
                "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
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
            .querySelector(".keep_neptune")
            ?.classList.remove("keep_neptune");
        btnKeep.classList.add("keep_neptune");
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
    imgMobile.src = "images/neptune1.svg";
    if ((btn11.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.";
    }
});
btn22.addEventListener("click", () => {
    imgMobile.src = "images/neptune2.svg";
    if ((btn22.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.";
    }
});
btn33.addEventListener("click", () => {
    imgMobile.src = "images/neptune3.svg";
    if ((btn33.onclick = "changeText();")) {
        document.getElementById("p1").innerHTML =
            "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.";
    }
});
btnAllMobile.forEach((btnKeepMobile) => {
    btnKeepMobile.addEventListener("click", () => {
        document
            .querySelector(".keep_mobile_neptune")
            ?.classList.remove("keep_mobile_neptune");
        btnKeepMobile.classList.add("keep_mobile_neptune");
    });
});
let neptune_h1 = new SplitType(".neptune_h1");
var tl = gsap.timeline({ defaults: { duration: 1 } });
tl.to("#javaimg", {
    "clip-path": "circle(100.5% at 50% 100%)",
    duration: 1.25,
    ease: "power4.out",
})
    .to(".neptune_h1", { opacity: 1, duration: 0.001 }, "-=1.25")
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
