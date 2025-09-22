
document.getElementById("loginForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    try {
        const res = await axios.post(
            "https://cyber-smartbackend-production-ffc3.up.railway.app/login",
            { username, password }
        );

        console.log("Response:", res.data);

        if (res.data.success) {
            window.location.href = "./dashboard.html";
        }
    } catch (err) {
        console.error("Error:", err.response?.data || err.message);
    }
});