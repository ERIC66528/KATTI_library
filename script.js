function checkStrength() {
  const password = document.getElementById("password").value;
  const strengthText = document.getElementById("strength");

  let strength = 0;

  if (password.length >= 8) strength++;
  if (/[A-Z]/.test(password)) strength++;
  if (/[a-z]/.test(password)) strength++;
  if (/[0-9]/.test(password)) strength++;
  if (/[^A-Za-z0-9]/.test(password)) strength++;

  if (password === "") {
    strengthText.textContent = "";
  } else if (strength <= 2) {
    strengthText.textContent = "Weak Password ❌";
    strengthText.style.color = "red";
  } else if (strength === 3 || strength === 4) {
    strengthText.textContent = "Moderate Password ⚠️";
    strengthText.style.color = "orange";
  } else {
    strengthText.textContent = "Strong Password ✅";
    strengthText.style.color = "lightgreen";
  }
}

function validatePasswords() {
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  if (password !== confirmPassword) {
    alert("Passwords do not match!");
    return false;
  }
  return true;
}
