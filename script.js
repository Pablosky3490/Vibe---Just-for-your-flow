// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Efecto simple para productos
document.querySelectorAll('.producto').forEach(producto => {
    producto.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });
    producto.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Actualizar año en el footer (si se quiere)
const yearSpan = document.getElementById('current-year');
if(yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

// Mensaje de consola divertido
console.log('%c🔥 VIBE - Just for your flow. 🔥', 'color: #6B8F71; font-size: 16px; font-weight: bold;');
console.log('%cGracias por visitar nuestra página. ¡Siente el flow!', 'color: #1A1A1A;');