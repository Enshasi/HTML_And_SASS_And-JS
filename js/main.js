// open and Colse the Mune

let landingMune = document.querySelector(" .muga-mune");
let iconGear = document.querySelector(".icon-gear");
iconGear.onclick = function() {
    this.classList.toggle("fa-spin");
    landingMune.classList.toggle("open");
};

//change The Color

let switcher = document.querySelectorAll(".change-color .switcher > li");
let localStrorgeColor = localStorage.getItem("backgroundColor");
if (localStrorgeColor != null) {
    document.documentElement.style.setProperty("--main-color", localStrorgeColor);
    switcher.forEach((re) => {
        re.classList.remove("active");
        if (re.dataset.color === localStrorgeColor) {
            re.classList.add("active");
        }
    });
}
switcher.forEach((li) => {
    li.addEventListener("click", (e) => {
        switcher.forEach((re) => {
            re.classList.remove("active");
        });
        e.target.classList.add("active");
        document.documentElement.style.setProperty(
            "--main-color",
            e.target.dataset.color
        );

        localStorage.setItem("backgroundColor", e.target.dataset.color);
    });
});

//Show And Hide The toggle menu

let ToggleMenu = document.querySelector(".toggle-menu");
let links = document.querySelector(".links");

ToggleMenu.onclick = function() {
    links.classList.toggle("linkTo");
};

$("#project-carousel").owlCarousel({
    loop: true,
    margin: 30,

    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 2,
            nav: true,
        },
        1000: {
            items: 4,
            nav: true,
            loop: true,
        },
    },
});

$("#testimonial-carousel").owlCarousel({
    loop: true,
    margin: 30,

    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: true,
        },
        600: {
            items: 1,
            nav: true,
        },
        1000: {
            items: 2,
            nav: true,
            loop: true,
        },
    },
});

//scroll The Link in section

let linkes = document.querySelectorAll(".header .links li a");
linkes.forEach((link) => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        linkes.forEach((es) => {
            es.classList.remove("active");
        });
        e.target.classList.add("active");

        document.querySelector(`#${e.target.dataset.scroll}`).scrollIntoView({
            behavior: "smooth",
        });
    });
});

//window scroll Add Active And Remove Slibling in Links
let section = document.querySelectorAll("div.section");

window.onscroll = function() {
    section.forEach((e) => {
        if (window.scrollY > e.offsetTop - 250) {
            var Id = e.getAttribute("id");

            document.querySelectorAll(".links li a").forEach((e) => {
                e.classList.remove("active");
            });
            document
                .querySelector('.links li a[data-scroll = "' + Id + '"]')
                .classList.add("active");
        }
    });
};