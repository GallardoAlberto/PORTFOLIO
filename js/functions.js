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

// menu movil

let mobilemenu = document.querySelector('.container--home--menuMobile')
let buttonmenu = document.querySelector('.fa-bars');
let contentmenu = mobilemenu.querySelector('ul');

menuClick = false;

buttonmenu.addEventListener('click', ()=>{

    if(menuClick == false){
        setTimeout(()=>{
            buttonhome.style.display = 'none';
            contentmenu.style.opacity = '1';
            mobilemenu.style.backgroundColor = 'black';
            mobilemenu.style.opacity = '0.9';
            mobilemenu.style.height = '100vh';

        },150);
        contentmenu.style.display = 'block';

        menuClick = true;
    }else{
        setTimeout(()=>{
            contentmenu.style.opacity = '0';
            mobilemenu.style.backgroundColor = 'transparent';
            buttonhome.style.display = 'block';
            mobilemenu.style.height = '0';

        },150);
        contentmenu.style.display = 'none';

        menuClick = false;

    }
})