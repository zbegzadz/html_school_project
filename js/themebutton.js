document.addEventListener('DOMContentLoaded', () => {
  const themeSwitch = document.getElementById('themeSwitch');
  const body = document.body;

  // Initialize theme based on the current body class
  themeSwitch.checked = body.classList.contains('theme-dark');

  // Toggle the theme when the switch is clicked
  themeSwitch.addEventListener('change', () => {
      if (themeSwitch.checked) {
          body.classList.remove('theme-light');
          body.classList.add('theme-dark');
      } else {
          body.classList.remove('theme-dark');
          body.classList.add('theme-light');
      }
  });
});
