// Mobile menu functionality
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.querySelector('nav button.md\\:hidden');
    const nav = document.querySelector('nav');
    
    // Obtener los enlaces del nav para el menú móvil
    const navLinks = nav ? Array.from(nav.querySelectorAll('.hidden.md\\:flex a')) : [];
    const menuItems = navLinks.map(link => {
        const href = link.getAttribute('href');
        const text = link.textContent.trim();
        return `<a href="${href}" class="block text-white py-2 hover:text-blue-200 transition-colors">${text}</a>`;
    }).join('');
    
    const mobileMenu = document.createElement('div');
    mobileMenu.id = 'mobile-menu';
    mobileMenu.className = 'md:hidden fixed top-16 left-0 right-0 z-40 bg-white/10 backdrop-blur-lg border-t border-white/20';
    mobileMenu.innerHTML = `
        <div class="px-4 py-2 space-y-2">
            ${menuItems || `
                <a href="index.html" class="block text-white py-2 hover:text-blue-200 transition-colors">Inicio</a>
                <a href="manual.html" class="block text-white py-2 hover:text-blue-200 transition-colors">Manual de Usuario</a>
                <a href="tecnico.html" class="block text-white py-2 hover:text-blue-200 transition-colors">Documentación Técnica</a>
                <a href="api.html" class="block text-white py-2 hover:text-blue-200 transition-colors">API Reference</a>
            `}
        </div>
    `;
    mobileMenu.style.display = 'none';
    
    if (mobileMenuButton && nav) {
        // Insertar el menú en el body para que esté siempre accesible
        document.body.appendChild(mobileMenu);
        
        // Agregar evento click al botón
        mobileMenuButton.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = mobileMenu.style.display === 'none' || mobileMenu.style.display === '';
            mobileMenu.style.display = isHidden ? 'block' : 'none';
        });
        
        // Cerrar el menú cuando se hace clic en un enlace
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.style.display = 'none';
            });
        });
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize Vanta.js background
    if (typeof VANTA !== 'undefined') {
        VANTA.BIRDS({
            el: "#vanta-bg",
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x1a1a2e,
            color1: 0x667eea,
            color2: 0x764ba2,
            colorMode: "lerpGradient",
            birdSize: 1.20,
            wingSpan: 25.00,
            speedLimit: 3.00,
            separation: 20.00,
            alignment: 20.00,
            cohesion: 20.00,
            quantity: 3.00
        });
    }
});