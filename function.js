const menu = document.querySelector('.menu')

    window.addEventListener('scroll',function(){
        menu.classList.toggle('active',window.scrollY >0)
    })  


    var miNombre = "Tobias";
    
    console.log (miNombre);

    var saludo = "hola " + miNombre;

    console.log(saludo);

   