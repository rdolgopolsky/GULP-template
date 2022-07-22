import {scrolltoAnchor} from "./modules/functions.js";
import Swiper, {Navigation, Pagination} from 'swiper';

document.addEventListener('DOMContentLoaded', () => {
	isElementExist(".swiper-container", initSlider);
	isElementExist(".page-header", scrolltoAnchor);
});

function isElementExist(_el, _cb) {
	let elem = document.querySelector(_el);
	
	if (document.body.contains(elem)) {
		try {
			_cb();
		} catch (e) {
			console.log(e);
		}
	}
}

function initPage(){
	alert("Hello world!");
}

function initSlider() {
	const swiper = new Swiper('.swiper-container', {
		loop: true,
	});
}
