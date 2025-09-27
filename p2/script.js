// ===== Form Validation =====
const form = document.getElementById('contactForm');
form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop page refresh

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("⚠️ Please fill in all fields.");
  } else {
    alert("✅ Thank you, " + name + "! Your message has been sent.");
    form.reset(); // clear the form
  }
});

// ===== Back to Top Button =====
const backToTop = document.getElementById('backToTop');

window.onscroll = function() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
};

backToTop.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
