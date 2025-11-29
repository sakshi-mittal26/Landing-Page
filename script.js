// Basic interactions: menu toggle, contact form handler
const menuBtn = document.getElementById('menu-btn');
const nav = document.querySelector('.nav');

if (menuBtn) {
  menuBtn.addEventListener('click', () => {
    if (nav.style.display === 'block') nav.style.display = '';
    else nav.style.display = 'block';
  });
}

// set year
document.getElementById('year').textContent = new Date().getFullYear();

// simple form handler (no backend) — just simulates submit and shows message
function handleForm(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  const msg = document.getElementById('form-msg');
  if (!name || !email || !message) {
    msg.textContent = 'Please fill all fields.';
    return;
  }

  // simulate send
  msg.textContent = 'Message prepared — please email directly or connect on LinkedIn.';
  // optionally create a mailto link
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  const mailto = `mailto:sakshimittal2610@gmail.com?subject=${encodeURIComponent('Portfolio contact from ' + name)}&body=${body}`;
  // open mail client
  window.location.href = mailto;
}
