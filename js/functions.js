// apartado de skills

let skills = document.querySelector('#skills');
let skillsh2 = skills.querySelectorAll('h2');
let skillscertificated = skills.querySelectorAll('.container--certificate');

let skillhtml = skills.querySelector('.fa-html5');
let skillcss = skills.querySelector('.fa-css3-alt');
let skilljs = skills.querySelector('.fa-js');
let skillphp = skills.querySelector('.fa-php');
let skillglobal = skills.querySelector('.fa-globe');

skillhtml.addEventListener('click', () =>{
    skillsh2[0].classList.toggle('hide');
    skillscertificated[0].classList.toggle('hide');
});

skillcss.addEventListener('click', () =>{
    skillsh2[1].classList.toggle('hide');
    skillscertificated[1].classList.toggle('hide');
});

skilljs.addEventListener('click', () =>{
    skillsh2[2].classList.toggle('hide');
    skillscertificated[2].classList.toggle('hide');
});

skillglobal.addEventListener('click', () =>{
    skillsh2[3].classList.toggle('hide');
    skillscertificated[3].classList.toggle('hide');
});

skillphp.addEventListener('click', () =>{
    skillsh2[4].classList.toggle('hide');
    skillscertificated[4].classList.toggle('hide');
});

// boton de subir al inicio

let buttonhome = document.querySelector('.fa-chevron-up');

buttonhome.addEventListener('click', () => {
    window.location.href = "#home";
})