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
