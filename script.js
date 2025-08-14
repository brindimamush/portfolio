document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Switcher ---
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme in localStorage
    if (localStorage.getItem('theme') === 'dark') {
        body.classList.replace('light-mode', 'dark-mode');
        themeToggle.checked = true;
    }

    themeToggle.addEventListener('change', () => {
        if (body.classList.contains('light-mode')) {
            body.classList.replace('light-mode', 'dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.replace('dark-mode', 'light-mode');
            localStorage.setItem('theme', 'light');
        }
    });


    // --- GSAP Animations ---
    gsap.registerPlugin(ScrollTrigger);

    // Animate Hero Section
    gsap.from(".hero-content", {
        duration: 1,
        x: -50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.2
    });

    gsap.from(".hero-image", {
        duration: 1,
        x: 50,
        opacity: 0,
        ease: "power3.out",
        delay: 0.4
    });

    // Animate Sections on Scroll
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: "top 80%", // Animation starts when top of the section hits 80% of viewport height
                toggleActions: "play none none none"
            },
            duration: 1,
            y: 30,
            opacity: 0,
            ease: "power3.out"
        });
    });

    // Animate Cards on Scroll
    const cards = document.querySelectorAll('.skill-card, .project-card, .timeline-item');
    cards.forEach(card => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 90%",
                toggleActions: "play none none none"
            },
            duration: 0.8,
            y: 20,
            opacity: 0,
            stagger: 0.1,
            ease: "power2.out"
        });
    });

});