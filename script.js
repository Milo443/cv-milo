 // 1. Inicializar iconos de Lucide
        lucide.createIcons();

        // 2. Lógica de la barra de progreso de lectura
        window.addEventListener("scroll", () => {
            const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrollPercent = (scrollTop / scrollHeight) * 100;
            document.getElementById("scroll-progress").style.width = scrollPercent + "%";
        });

        // 3. Intersection Observer para animaciones "Scroll Reveal"
        // Esto imita el `whileInView` o `initial/animate` de Framer Motion
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1 // Dispara cuando el 10% del elemento es visible
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                    observer.unobserve(entry.target); // Animación ocurre solo una vez
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => {
            observer.observe(el);
        });