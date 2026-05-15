const btn = document.getElementById('theme-btn');
        const html = document.documentElement;
        btn.addEventListener('click', () => {
            const current = html.getAttribute('data-theme');
            const target = current === 'dark' ? 'light' : 'dark';
            html.setAttribute('data-theme', target);
            btn.innerHTML = target === 'dark' ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
        });
         // Get the current year
      const currentYear = new Date().getFullYear();

      // Update the footer year
      document.getElementById("current-year").textContent = currentYear;

      // Scroll Reveal Animation
      const observerOptions = {
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
