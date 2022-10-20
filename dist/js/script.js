const mobileNav = document.querySelector('.mobile__navigation');
const faqs = document.querySelectorAll('.question');
const faqImg = document.querySelectorAll('.faq-img');
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-container');
const errorMessage = document.getElementById('message');
const errorIcon = document.getElementById('error');
const errorColor = document.querySelector('.input');

// ==remove transitions after windows load
window.addEventListener('load', () => {
	document.body.classList.remove('trans');
	optimize();
});

function optimize() {
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

	// ========faq-section===============
	faqs.forEach((faq, index) => {
		faq.addEventListener('click', () => {
			faq.classList.toggle('height');
			faqImg.forEach((img) => {
				if (!faq.classList.contains('height')) {
					img.src = './images/icon-arrow.svg';
					img.style.transform = 'rotate(0deg)';
				} else {
					faqImg[index].src = './images/icon-arrow2.svg';
					faqImg[index].style.transform = 'rotate(180deg)';
				}
			});
		});
	});

	// =======Email-validation=========
	document.getElementById('emailBtn').addEventListener('click', (e) => {
		validate();
	});

	function validate() {
		const email = document.getElementById('email').value;
		let regx = /^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+)(.[a-z]+)?$/;
		if (regx.test(email)) {
			removeError();
		} else if (email === '') {
			removeError();
		} else {
			popError();
		}

		document.getElementById('email').addEventListener('keydown', (e) => {
			if (!e.value === regx.test(email)) {
				popError();
			} else {
				removeError();
			}
		});
	}

	function popError() {
		errorColor.classList.add('invalid-input');
		errorMessage.style.display = 'block';
		errorIcon.style.display = 'block';
	}
	function removeError() {
		errorColor.classList.remove('invalid-input');
		errorMessage.style.display = 'none';
		errorIcon.style.display = 'none';
	}
}
