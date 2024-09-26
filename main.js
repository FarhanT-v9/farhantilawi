var typed = new Typed(".text", {
    strings: ["Student", "Pro PC User","Sportive"],
    backDelay: 800,
    backSpeed: 50,
    typeSpeed: 70,
    loop: true,
});


const toggleBtn = document.querySelector('.toggle-btn');
const toggleBtnIcon = document.querySelector('.toggle-btn i');
const dropDownMenu = document.querySelector('.dropdown_menu');


toggleBtn.onclick = function () {
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open');

    toggleBtnIcon.classList = isOpen
        ? 'bx bx-x'
        : 'bx bx-menu'
}
// 


const filterItem = document.querySelector(".item-pics");
const filterImg = document.querySelectorAll(".image");

// gallery 
window.onload = () => {
    filterItem.onclick = (selectedItem) => {
        if (selectedItem.target.classList.contains("item-pic")) {
            filterItem.querySelector(".gallery-active").classList.remove("gallery-active");
            selectedItem.target.classList.add("gallery-active");
            let filterName = selectedItem.target.getAttribute("data-name");
            filterImg.forEach((image) => {
                let filterImages = image.getAttribute("data-name");
                console.log(filterImages);
                if ((filterImages == filterName) || filterName == "all") {
                    image.classList.remove("hide");
                    image.classList.add("show");
                } else {
                    image.classList.add("hide");
                    image.classList.remove("show");
                }

            });
        }
    }

}

// popup image fullscreen view

const images = [...document.querySelectorAll('.image')];

//  popup

const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.close-btn');
const imageName = document.querySelector('.image-name');
const largeImage = document.querySelector('.large-image');
const imageIndex = document.querySelector('.index');
const leftArrow = document.querySelector('.left-arrow');
const rightArrow = document.querySelector('.right-arrow');

let index = 0;
images.forEach((item, i) => {
    item.addEventListener('click', () => {
        updateImage(i);
        popup.classList.toggle('active');
    })
})

const updateImage = (i) => {
    let path = `imgs/img${i + 1}.png`;
    largeImage.src = path;
    imageName.innerHTML = path;
    imageIndex.innerHTML = `0${i + 1}`;
    index = i;
}
closeBtn.addEventListener('click', () => {
    popup.classList.toggle('active');
})
leftArrow.addEventListener('click', () => {
    if (index > 0) {
        updateImage(index - 1)
    }
})
rightArrow.addEventListener('click', () => {
    if (index < images.length - 1) {
        updateImage(index + 1)
    }
})

// Back To toop ::

var toop = document.getElementById("toop")

window.onscroll = function () {
    scrollFunction()
};
function scrollFunction() {
    if (document.body.scroll > 100 || document.documentElement.scrollTop > 100) {
        toop.style.display = "block";
    }
    else {
        toop.style.display = "none";
    }
}

// Contact Me Focus ::

// const inputs = document.querySelectorAll(".input");

// function focusFunc() {
//     let parent = this.parentNode;
//     parent.classList.add("focus");
// }

// function blurFunc() {
//     let parent = this.parentNode;
//     if (this.value == "") {
//         parent.classList.remove("focus");
//     }

// }

// inputs.forEach(input => {
//     input.addEventListener("focus", focusFunc);
//     input.addEventListener("blur", blurFunc);
// });

// specifec particlesJS
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 160,
            "density": {
                "enable": true,
                "value_area": 800
            }
        },
        "color": {
            "value": "#ffffff"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 5
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": true,
            "anim": {
                "enable": true,
                "speed": 1,
                "opacity_min": 0,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 4,
                "size_min": 0.3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 1,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 600
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "bubble"
            },
            "onclick": {
                "enable": false,
                "mode": "repulse"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 250,
                "size": 0,
                "duration": 2,
                "opacity": 0,
                "speed": 3
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

var count_particles, stats, update;
stats = new Stats();
stats.setMode(0);
stats.domElement.style.position = 'absolute';
stats.domElement.style.left = '0px';
stats.domElement.style.top = '0px';
document.body.appendChild(stats.domElement);

count_particles = document.querySelector('.js-count-particles');

update = function () {
    stats.begin();
    stats.end();
    if (window.pJSDom[0].pJS.particles && window.pJSDom[0].pJS.particles.array) {
        count_particles.innerText = window.pJSDom[0].pJS.particles.array.length;
    }
    requestAnimationFrame(update);
};

requestAnimationFrame(update);