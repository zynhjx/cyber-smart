document.getElementById("registerForm").addEventListener("submit", async (e) => {
  e.preventDefault()

  const username = document.getElementById("username").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value
  const confirmPassword = document.getElementById("confirm-password").value

  const passwordInput = document.getElementById("password")
  const confirmPasswordInput = document.getElementById("confirm-password")   
  const message = document.getElementById("message")

  if (password !== confirmPassword) {
    alert("Passwords do not match!")
    return
  }

  try {
    const res = await axios.post(
      "https://cyber-smartbackend-production-ffc3.up.railway.app/register",
      { username, email, password }
    )

    if (res.data.success) {
      alert("Account created successfully!")
      window.location.href = "login.html"
    } else {
      alert(res.data.message || "Registration failed.")
    }
  } catch (err) {
    console.error("Error:", err.response?.data || err.message)
  }
})

const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm-password")
const message = document.getElementById("message")

function validatePasswords() {
  if (!passwordInput.value && !confirmPasswordInput.value) {
    passwordInput.style.border = ""
    confirmPasswordInput.style.border = ""
    message.textContent = ""
    return
  }

  if (passwordInput.value !== confirmPasswordInput.value) {
    passwordInput.style.border = "2px solid red"
    confirmPasswordInput.style.border = "2px solid red"
    message.textContent = "Passwords do not match"
    message.style.color = "red"
  } else {
    passwordInput.style.border = "2px solid green"
    confirmPasswordInput.style.border = "2px solid green"
    message.textContent = "Passwords match"
    message.style.color = "green"
  }
}

passwordInput.addEventListener("input", validatePasswords)
confirmPasswordInput.addEventListener("input", validatePasswords)