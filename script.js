

//Header toggle 

let MenuBtn = document.getElementById('MenuBtn')

MenuBtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')

})

//Active Link state on scroll

//Get All Links
let navLinks = document.querySelectorAll('nav ul li a')
//get All section

let sections = document.querySelectorAll('section')

window.addEventListener('scroll',function(){
    const scrollPos = this.window.scrollY
    sections.forEach(section =>{
        if(scrollPos > section.offsetTop && scrollPos < (section.offsetTop + section.offsecHeight)){
            navLinks.forEach(link =>{
                link.classList.remove('active');
                if(section.getAttribute('id') === link.getAttribute('href').substring(1))(
                    link.classList.add('active')
                )
            });
        }
    });
});