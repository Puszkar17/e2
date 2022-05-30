const menu = document.querySelector('.menu')

    window.addEventListener('scroll',function(){
        menu.classList.toggle('active',window.scrollY >0)
    })    