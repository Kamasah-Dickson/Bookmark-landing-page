const mobileNav = document.querySelector('.mobile__navigation');

document.getElementById('hamburger').addEventListener('click', ()=> {
mobileNav.classList.add('show-nav');
});

document.getElementById('close').addEventListener('click',()=> {
    mobileNav.classList.remove('show-nav');
});