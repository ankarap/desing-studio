const iconBurger = document.querySelector('.header__burger');
const menu = document.querySelector('.header__menu')
if (iconBurger) {
	iconBurger.addEventListener("click", function (e) {
		document.body.classList.toggle('_lock');
		iconBurger.classList.toggle('_active');
		menu.classList.toggle('_active');
	});
}
/*-------*/
var mySwiper = new Swiper(".swiper", {
	slidesPerView: 1,
	spaceBetween: 35,
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev",
	},
	breakpoints:{
		767:{
			slidesPerView: 2,
		},
		992:{
			slidesPerView: 3,
		}
	}
});
/*------------------------------*/
