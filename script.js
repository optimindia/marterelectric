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
});