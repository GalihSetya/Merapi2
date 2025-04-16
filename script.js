
$(document).ready(function(){
    // Sticky navbar on scroll script
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        
        // Scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    const handleObserver = () => {
        const currentSection = window.scrollY;
        allSections.forEach((section) => {
            if (
                section.classList.contains("white-section") &&
                section.offsetTop <= currentSection + 60
            ) {
                navBtnBars.classList.add("black-bars-color");
            } else if (
                !section.classList.contains("white-section") &&
                section.offsetTop <= currentSection + 60
            ) {
                navBtnBars.classList.remove("black-bars-color");
            }
        });
    };
    

    // Scroll-up button functionality
    $('.scroll-up-btn').click(function(){
        $('html, body').animate({scrollTop: 0}, 'slow');
        // Removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    // Apply smooth scroll on menu items click
    $('.navbar .menu li a').click(function(){
        $('html').css("scrollBehavior", "smooth");
    });


    // Typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Villa Impian untuk Liburan Anda"],
        typeSpeed: 70,
        backSpeed: 60,
        loop: true
    });


});


// Hamburger Script
document.querySelector('.cobahamburger').addEventListener('click', (e) => {
    e.currentTarget.classList.toggle('is-active');
});

const nav = document.querySelector(".nav");
const navBtn = document.querySelector(".burger-btn");
const navLink = document.querySelectorAll(".nav__item");
const navBtnBars = document.querySelector(".burger-btn__bars");
const allSections = document.querySelectorAll(".section");
const footerYear = document.querySelector(".footer__year");

const handleNav = () => {
    nav.classList.toggle("nav--active");
    navBtnBars.classList.remove("black-bars-color");
    navLink.forEach((item) => {
        item.addEventListener("click", () => {
            nav.classList.remove("nav--active");
        });
    });
    handleNavAmination();
};

const handleNavAmination = () => {
    let delayTime = 0;
    navLink.forEach((item) => {
        item.classList.toggle("nav-items-animation");
        item.style.animationDelay = "." + delayTime + "s";
        delayTime++;
    });
};


// Ambil scene terakhir dari sessionStorage jika tersedia
const lastScene = sessionStorage.getItem('lastScene') || 'Depanvilla'; // Default scene "Depanvilla"

// Inisialisasi Pannellum Viewer dengan scene terakhir
const viewer = pannellum.viewer('panorama', {
    default: {
        firstScene: lastScene,
        autoLoad: true,
        autoRotate: -2,
        showZoomCtrl: true,
        showFullscreenCtrl: true
    },
    scenes: {
        Depanvilla: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/DepanVilla",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: 7,
                    yaw: 2,
                    type: "scene",
                    text: "Go to Aula",
                    sceneId: "Aula"
                },
                {
                    pitch: -2.1,
                    yaw: 55,
                    type: "scene",
                    text: "Go to Parkiran",
                    sceneId: "Parkiran"
                }
            ]
        },
        Aula: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Aula",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -45,
                    type: "scene",
                    text: "Go to Depanvilla",
                    sceneId: "Depanvilla"
                },
                {
                    pitch: 0,
                    yaw: 30,
                    type: "scene",
                    text: "Go to Kamar1",
                    sceneId: "Kamar1"
                },
                {
                    pitch: 0,
                    yaw: 45,
                    type: "scene",
                    text: "Go to Kamar2",
                    sceneId: "Kamar2"
                },
                {
                    pitch: 0,
                    yaw: 100,
                    type: "scene",
                    text: "Go to Kamar3",
                    sceneId: "Kamar3"
                },
                {
                    pitch: 0,
                    yaw: 140,
                    type: "scene",
                    text: "Go to DepanDapur",
                    sceneId: "DepanDapur"
                }
            ]
        },
        Parkiran: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Parkiran",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: -5,
                    yaw: -35,
                    type: "scene",
                    text: "Go to Depanvilla",
                    sceneId: "Depanvilla"
                },
                {
                    pitch: -5,
                    yaw: 135,
                    type: "scene",
                    text: "Go to Lapangan",
                    sceneId: "Lapangan"
                }
            ]
        },
        Lapangan: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Lapangan",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: 0,
                    yaw: -100,
                    type: "scene",
                    text: "Go to Parkiran",
                    sceneId: "Parkiran"
                }
            ]
        },
        Kamar1: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Kamar1",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 125,
                    type: "scene",
                    text: "Go to Aula",
                    sceneId: "Aula"
                }
            ]
        },
        Kamar2: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Kamar2",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 170,
                    type: "scene",
                    text: "Go to Aula",
                    sceneId: "Aula"
                }
            ]
        },
        Kamar3: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Kamar3",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: -5,
                    yaw: 180,
                    type: "scene",
                    text: "Go to Aula",
                    sceneId: "Aula"
                }
            ]
        },
        Kamar4: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/Kamar4",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: 7,
                    yaw: 2,
                    type: "scene",
                    text: "Go to DepanDapur",
                    sceneId: "DepanDapur"
                }
            ]
        },
        DepanDapur: {
            type: "multires",
            multiRes: {
                basePath: "./panorama/DepanDapur",
                path: "/%l/%s%y_%x",
                fallbackPath: "./fallback/%s",
                extension: "jpg",
                tileResolution: 512,
                maxLevel: 3,
                cubeResolution: 8192
            },
            hotSpots: [
                {
                    pitch: 0,
                    yaw: 77,
                    type: "scene",
                    text: "Go to Aula",
                    sceneId: "Aula"
                },
                {
                    pitch: 0,
                    yaw: 150,
                    type: "scene",
                    text: "Go to Kamar4",
                    sceneId: "Kamar4"
                }
            ]
        }
    }
});

// Simpan scene terakhir ke sessionStorage saat berubah
viewer.on('scenechange', function (sceneId) {
    sessionStorage.setItem('lastScene', sceneId);
});

// Inisialisasi Slick Slider
$(document).ready(function () {
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Event listener untuk klik thumbnail
    $('.slider .scene').on('click', function () {
        const sceneId = $(this).data('scene');
        viewer.loadScene(sceneId);
        sessionStorage.setItem('lastScene', sceneId);
    });
});


