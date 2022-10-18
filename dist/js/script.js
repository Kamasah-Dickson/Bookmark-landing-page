const mobileNav = document.querySelector('.mobile__navigation');
// =========tabs===============
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-container');

// ==remove transitions after windows loads
window.addEventListener('load', ()=> {
	document.body.classList.remove('.trans');
});

//================ after-document-loads===========
window.addEventListener('DOMContentLoaded', () => {
	console.log('loaded');
	const menu = document
		.getElementById('hamburger')
		.addEventListener('click', () => {
			mobileNav.classList.add('show-nav');
		});
	const closeMenu = document
		.getElementById('close')
		.addEventListener('click', () => {
			mobileNav.classList.remove('show-nav');
		});
	const mobileLinksParent = document
		.querySelector('.mobile__navigation__body__togglers')
		.addEventListener('click', () => {
			mobileNav.classList.remove('show-nav');
		});
	//for Event Deligation

	// ====tabs===
	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			contents.forEach((content) => {
				content.classList.remove('active');
			});
			tabs.forEach((tab) => {
				tab.classList.remove('active');
			});
			tabs[index].classList.add('active');
			contents[index].classList.add('active');
		});
	});
});
