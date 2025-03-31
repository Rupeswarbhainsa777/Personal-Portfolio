// ==============menue================


const nevMenu = document.getElementById('nav-menu');
const nevToggle = document.getElementById('nav-toggle');


// ===menue show - hideen==============

nevToggle.addEventListener('click',()=>{
    nevMenu.classList.toggle('show-menu');
    nevToggle.classList.toggle('animate-toggle');
    
});
// =====================remove menue mobile===============
const navLink = document.querySelectorAll('.nav-link');

const linkAction=()=>{
    const navMenu = document.getElementById('nav-menu');

    nevToggle.classList.remove('animate-toggle');
    navMenu.classList.remove('show-menu');

}
navLink.forEach((n)=>n.addEventListener('click',linkAction));

// change background Header ======================

const scrollHeader =()=>{
    const header = document.getElementById('header')
    this.scrollY>=20? header.classList.add('bg-header')
    :header.classList.remove('bg-header');
};

window.addEventListener('scroll',scrollHeader);
// ===============scrooll section Active Link==================

 const sections =document.querySelectorAll('section[id]');




const  scrollActive =()=>{
    const scrollY = window.pageYOffset;

    sections.forEach((current)=>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop -58;
        const sectionId = current.getAttribute('id');
            const sectionsClass = document.querySelector('.nav-menu a[href*='+ sectionId+']')

            if(scrollY > sectionTop && scrollY <= sectionTop +sectionHeight){
                sectionsClass.classList.add('active-link');

            }
            else{
                sectionsClass.classList.remove('active-link');
            }
    
    

    })
} ;
window.addEventListener('scroll',scrollActive);
// ===================services swiper======================


    var servicesSswiper = new Swiper(".services-swiper", {

        spaceBetween:32,
        pagination: {
            el: ".swiper-pagination",
            clickable :true,
          },
          breakpoints: {
            
            768: {
              slidesPerView: 2,
              
            },
            1208: {
              slidesPerView: 3,
              
            },
          },
    });
  

// mixitup filter portfolio========================

var mixer = mixitup('.work-container', {
    selectors: {
        target: '.mix',
    },
    animation: {
        duration:  300
    }
});

// Active work======================
const linkWork = document.querySelectorAll('.work-item');

function activeWork(){
    linkWork.forEach((a)=>{
        a.classList.remove('active-work');
    });
    this.classList.add('active-work');
}

linkWork.forEach((a)=>a.addEventListener('click', activeWork));
// ====resume====

const accordionItems = document.querySelectorAll('.resume-item');

accordionItems.forEach((item)=>{
    const header = item.querySelector('.resume-header');
    const content = item.querySelector('.resume-content');
    const icon = item.querySelector('.resume-icon i');

    header.addEventListener('click',()=>{
        const isOpen = item.classList.toggle('accordion-open');
        
        content.style.height = isOpen ? content.scrollHeight+'px': '0';
        icon.className= isOpen ? 'ri-subtract-line' : 'ri-add-line';

        accordionItems.forEach((otherItem)=>{
            if(otherItem !== item && otherItem.classList.contains('accordion-open')){
                otherItem.querySelector('.resume-content').style.height='0';
                otherItem.querySelector('.resume-icon i').classList = 'ri-add-line';
                otherItem.classList.remove('accordion-open');
            }
        })
    });
});

// Testimonial Swiper================

// Email JS========================
const contactform = document.getElementById('contact-form');
const contactName = document.getElementById('contact-name');
const contactEmail = document.getElementById('contact-email');
const contactSubject = document.getElementById('contact-subject');

const contactMessage = document.getElementById('contact-message');
const message = document.getElementById('message');

const sendEmail=(e)=> {
    e.preventDefault();
    if(contactName.value ==='' || contactEmail.value==='' || contactSubject.value==='' || contactMessage.value===''){
        message.classList.add('color-red');

        message.textContent='Write all the input fields';
        console.log(contactName, contactEmail, contactSubject, contactMessage);
        setTimeout(()=>{
            message.textContent=''; 
        },3000);
    }
    else{
        emailjs.sendForm('service_91z8mb3',
             'template_yl2uf3j',
             '#contact-form',
            '6fmIQQFoeFXtI89i6'
        ).then(
            () => {
                message.classList.remove('color-first');
              message.classList.add('color-first');
              message.textContent='Message sent ✔';

              setTimeout(()=>{
                message.textContent='';
            },5000);
            
            },
            (error) => {
             alert('OOPs! SOMETHING WENT WRONG...', error);
            },
          );
          contactName.value='';
          contactEmail.value='';
          contactSubject.value='';
          contactMessage.value='';

    }
};
contactform.addEventListener('submit',sendEmail);

// Style Switcher==================

const styleSwitcher = document.getElementById('style-switcher');
const  switcherToggle = document.getElementById('switcher-toggle');
const  switcherClose = document.getElementById('switcher-close');


// ====Swither show ===

switcherToggle.addEventListener('click',()=>{
    styleSwitcher.classList.add('show-switcher');
});


// swither hidden==============
switcherClose.addEventListener('click',()=>{
    styleSwitcher.classList.remove('show-switcher');
});


// ===========them color===================
const colors = document.querySelectorAll('.style-switcher-color');

 colors.forEach((color)=>{
    color.onclick=()=>{
        const activeColor = color.style.getPropertyValue('--hue');


        colors.forEach((c)=>c.classList.remove('active-color'));
        color.classList.add('active-color');

        document.documentElement.style.setProperty('--hue', activeColor);
    };

 });

// ===============Light/Dark Mode==================


let currentTheme ='light';
document.body.className= currentTheme;

document.querySelectorAll('input[name ="body-them"]').forEach((input)=>{
    input.addEventListener('change',()=>{
             currentTheme= input.value;

             document.body.className= currentTheme;
    });
});