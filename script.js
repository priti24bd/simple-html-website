// Small scripts: dynamic year, mobile menu, basic form validation


// Year
document.getElementById('year').textContent = new Date().getFullYear();


// Mobile menu toggle
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
menuBtn?.addEventListener('click', ()=>{
const expanded = menuBtn.getAttribute('aria-expanded') === 'true';
menuBtn.setAttribute('aria-expanded', String(!expanded));
if(!expanded) nav.style.display = 'inline-flex'; else nav.style.display = '';
});


// Form handling
const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');
form?.addEventListener('submit', (e)=>{
e.preventDefault();
status.textContent = '';
if(!form.checkValidity()){
status.textContent = 'Please fill out the form correctly.';
return;
}
// Simulate sending
status.textContent = 'Sending...';
setTimeout(()=>{
status.textContent = 'Thanks — your message was sent (simulated).';
form.reset();
},900);
});
