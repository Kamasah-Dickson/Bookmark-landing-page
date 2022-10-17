const mobileNav = document.querySelector('.mobile__navigation');
const menu = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const mobileLinksParent = document.querySelector(
	'.mobile__navigation__body__togglers'
); //for Event Deligation

closeMenu.addEventListener('click', () => {
	mobileNav.classList.remove('show-nav');
});

menu.addEventListener('click', () => {
	mobileNav.classList.remove('move-up');
	mobileNav.classList.add('show-nav');
});

mobileLinksParent.addEventListener('click', () => {
	mobileNav.classList.remove('show-nav');
});
