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

navBtn?.addEventListener('click', navigation)