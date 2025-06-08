function submitRegistration() {
  const name = document.querySelector('.sign-up-container input[placeholder="Name"]').value;
  const email = document.querySelector('.sign-up-container input[placeholder="Email"]').value;
  const password = document.querySelector('.sign-up-container input[placeholder="Password"]').value;

  if (name && email && password) {
    // Save data in localStorage (can be used on next page)
    localStorage.setItem('sem_name', name);
    localStorage.setItem('sem_email', email);
    localStorage.setItem('sem_password', password);

    // Redirect to next step
    window.location.href = 'registration.html';
  } else {
    alert("Please fill in all fields.");
  }
}
