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