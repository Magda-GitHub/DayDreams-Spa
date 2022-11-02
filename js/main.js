const nav = document.querySelector('.nav');
const navBtn = document.querySelector('.burger-btn');
const allNavLink =document.querySelectorAll('.nav__link');
const footerYear = document.querySelector('.footer__year');
const form = document.querySelector("form");

let popup = document.getElementById("popup");


function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}


const navigation = () => {
    nav?.classList.toggle('nav--activity')

    allNavLink.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav--activity')
        })
    })

}





const handleCurrentYear = () => {
    const year = (new Date).getFullYear();
    footerYear.innerText = year;
}



handleCurrentYear();
navBtn?.addEventListener('click', navigation);
