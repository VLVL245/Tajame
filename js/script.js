"use strict"

//Меню burger=========================================================================================================

window.onload = function () {
	adaptiveHeader();
}

window.addEventListener('resize', function () {
	adaptiveHeader();
});

function adaptiveHeader() {
	let factWidth = window.innerWidth;
	const headerBurger = document.querySelector('.header-menu__icon');
	let headerMenuBurger = document.querySelector('.header-menu');
	let menuBody = document.querySelector('.menu__body');
	let menu = document.querySelector('.menu__list');
	if (factWidth <= 767) {
		if (!menu.classList.contains('done')) {
			menu.classList.add('done');
			[menu].forEach(element => {
				headerMenuBurger.insertAdjacentElement('beforeend', element);
			});
		}
	} else if (factWidth > 767) {
		headerMenuBurger.classList.remove('_active');
		headerBurger.classList.remove('_active');
		if (menu.classList.contains('done')) {
			menu.classList.remove('done');
			[menu].forEach(element => {
				menuBody.insertAdjacentElement('afterbegin', element);
			});
		}
	}
}

const headerMenuList = document.querySelector('.menu__list');
const headerMenuBurger = document.querySelector('.header-menu');
const headerBurger = document.querySelector('.header-menu__icon');
if (headerBurger) {
	headerBurger.addEventListener("click", function (element) {
		headerBurger.classList.toggle('_active');
		headerMenuBurger.classList.toggle('_active');
		if (headerMenuBurger.classList.contains('_active')) {
			scrollStop();
		} else {
			scrollActive();
		}
	});
	headerMenuList.addEventListener("click", function (element) {
		headerBurger.classList.remove('_active');
		headerMenuBurger.classList.remove('_active');
		if (headerMenuBurger.classList.contains('_active')) {
			scrollStop();
		} else {
			scrollActive();
		}
	});
}

function scrollStop() {
	document.body.classList.add("stop-scrolling");
}
function scrollActive() {
	document.body.classList.remove("stop-scrolling");
}

//Меню burger======================================================================================================================

// ibg cod=============================================================================================================

function ibg() {
	let ibg = document.querySelectorAll(".ibg");
	for (var i = 0; i < ibg.length; i++) {
		if (ibg[i].querySelector('img')) {
			ibg[i].style.backgroundImage = 'url(\'' + ibg[i].querySelector('img').getAttribute('src') + '\')';
		}
	}
}
ibg();

// ibg cod=============================================================================================================

//Swiper ================================================================================================================

let swiper = new Swiper('.mySwiper1', {
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
	},
});

let text = "";
let swiper2 = new Swiper('.mySwiper2', {
	direction: 'horizontal',
	loop: true,
	autoHeight: true,
	pagination: {
		el: '.swiper-pagination',
		type: 'bullets',
		clickable: true,
		dynamicBullets: true,
		renderBullet: function (index, className) {
			switch (index) {
				case 0:
					text = "img/swiper-icons/1.png";
					break;
				case 1:
					text = "img/swiper-icons/2.png";
					break;
				case 2:
					text = "img/swiper-icons/3.png";
					break;
				case 3:
					text = "img/swiper-icons/4.png";
					break;
				case 4:
					text = "img/swiper-icons/5.png";
					break;
			}
			return ('<span class="' + className + '">' + "<img src=" + text + "></span>");
		}
	},
	navigation: {
		nextEl: '.s-button-next',
		prevEl: '.s-button-prev',
	},
	initialSlide: 2,
});

//Swiper=====================================================================================================================

// Video================================================================================================

let playButton = document.querySelector(".video-story__buttom");
let videoControl = document.querySelector("#video");

playButton.addEventListener("click", function () {
	if (video.paused == true) {
		video.play();
		videoControl.setAttribute("controls", "");
		playButton.classList.toggle("_active");
	} else {
		video.pause();

	}
})
videoControl.addEventListener("pause", function () {
	if (video.paused == true) {
		playButton.classList.remove("_active");
		videoControl.removeAttribute("controls");
	}
})

// Video======================================================================

// Scroll up==================================================================
let up = document.querySelector('.home');
document.addEventListener('scroll', function () {
	if (window.pageYOffset >= 800) {
		up.classList.add('fixed');
	}
	else {
		up.classList.remove('fixed');
	}
});


