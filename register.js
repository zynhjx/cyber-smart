
document.getElementById("registerForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    try {
        const res = await axios.post(
            "https://cyber-smartbackend-production-ffc3.up.railway.app/register",
            { username, email, password }
        );

        alert(res)

        if (res.data.success) {
            alert("Account created successfully!");
            window.location.href = "login.html";
        } else {
            alert(res.data.message || "Registration failed.");
        }
    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
        alert(err.message);
    }
});