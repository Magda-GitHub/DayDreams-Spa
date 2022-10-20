const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavLink =document.querySelectorAll('.nav__link')
// const navBtnBars = document.querySelector('.burger-btn__bars')
// const sectionAll = document.querySelectorAll('.section')
// const sectionHotel = document.querySelector('.section__hotel')
const footerYear = document.querySelector('.footer__year')

const navigation = () => {
    nav.classList.toggle('nav--activity')

    allNavLink.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--activity')
        })
    })

}


// const handleSection = () => {
//     const currentSection = window.scrollY;

//     sectionAll.forEach(section => {

//         if (section.classList.contains('light__section') && section.offsetTop <= currentSection + 5) {
//             navBtnBars.classList.add('black__bars__color')
//         } else if (!section.classList.contains('light__section') && section.offsetTop <= currentSection + 5){
//             navBtnBars.classList.remove('black-bars-color')
//         }
//     })
// }




const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}



handleCurrentYear();
navBtn.addEventListener('click', navigation);
// window.addEventListener('scroll', handleSection);