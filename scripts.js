const element1 = document.querySelector('.contenedor');
const element2 = document.querySelector('.contenedor-sobre-nosotros');
const element3 = document.querySelector('.contenedor-video');
const element4 = document.querySelector('.contenedor-soporte');


const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {

        if (entry.target === element1) {

            if (entry.isIntersecting) {
                element1.classList.add('animate__animated', 'animate__fadeInDown');
            } else {
                element1.classList.remove('animate__animated', 'animate__fadeInDown');
            }

        }

        if (entry.target === element2) {

            if (entry.isIntersecting) {
                element2.classList.add('animate__animated', 'animate__fadeInLeft');
            } else {
                element2.classList.remove('animate__animated', 'animate__fadeInLeft');
            }

        }

            if (entry.target === element3) {
                if (entry.isIntersecting) {
                    element3.classList.add('animate__animated', 'animate__fadeInRight');
                } else {
                    element3.classList.remove('animate__animated', 'animate__fadeInRight');
                }
            }

            if (entry.target === element4) {
                if (entry.isIntersecting) {
                    element4.classList.add('animate__animated', 'animate__fadeInUp');
                } else {
                    element4.classList.remove('animate__animated', 'animate__fadeInUp');
                }
            }

           





    });
}, {
    threshold: 0.01
});

observer.observe(element1);
observer.observe(element2);
observer.observe(element3);
observer.observe(element4);
