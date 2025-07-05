document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            navMenu.classList.toggle("active");
        });
    }

    // Manejar clics en los botones de WhatsApp
    const whatsappButtons = document.querySelectorAll(".whatsapp-button");
    const phoneNumber = "5492615418231"; // Tu número de teléfono sin el signo + ni espacios

    whatsappButtons.forEach(button => {
        button.addEventListener("click", () => {
            const serviceName = button.dataset.service;
            const message = `¡Hola! Me interesa el servicio de ${serviceName}. ¿Podrías darme más información?`;
            const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
            window.open(whatsappLink, '_blank');
        });
    });

    // Efecto de scroll en el header
    const header = document.querySelector("header");
    const backToTopButton = document.getElementById("back-to-top");

    if (header) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) { // Cambia a 50px de scroll
                header.classList.add("scrolled");
            } else {
                header.classList.remove("scrolled");
            }

            // Mostrar/ocultar botón Volver Arriba
            if (window.scrollY > 300) { // Muestra el botón después de 300px de scroll
                backToTopButton.style.display = "block";
            } else {
                backToTopButton.style.display = "none";
            }
        });
    }

    // Desplazamiento suave al hacer clic en el botón Volver Arriba
    if (backToTopButton) {
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // Desplazamiento suave para enlaces internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Inicializar ScrollReveal
    ScrollReveal().reveal('.reveal', {
        distance: '50px',
        origin: 'bottom',
        opacity: 0,
        duration: 1000,
        easing: 'ease-in-out',
        interval: 100, // Retraso entre elementos revelados
        reset: false // Animación solo una vez
    });

    ScrollReveal().reveal('.reveal-item', {
        distance: '30px',
        origin: 'bottom',
        opacity: 0,
        duration: 800,
        easing: 'ease-in-out',
        interval: 150,
        reset: false
    });

    });