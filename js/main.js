const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavLink =document.querySelectorAll('.nav__link')

const navigation = () => {
    nav.classList.toggle('nav--activity')

    allNavLink.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--activity')
        })
    })

}

const burgerBtn = () => {
    const currentSection = window.scrollY;

    allSections.forEach(section => {

        if (section.classList.contains('light__section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.add('black__bars')
        } else if (!section.classList.contains('light__section') && section.offsetTop <= currentSection + 60) {
            navBtnBars.classList.remove('black__bars')
        }
    })
}


navBtn.addEventListener('click', navigation);
window.addEventListener('scroll', burgerBtn)