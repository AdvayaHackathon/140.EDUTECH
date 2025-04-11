function showForm(formType) {
    document.getElementById("signupForm").style.display = formType === "signup" ? "block" : "none";
    document.getElementById("loginForm").style.display = formType === "login" ? "block" : "none";
  }
  
  function createAccount() {
    const email = document.getElementById("signupEmail").value;
    const password = document.getElementById("signupPassword").value;
    const role = document.getElementById("signupRole").value;
  
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(password)) {
      alert("Password must contain at least one capital letter, one number, and one symbol.");
      return;
    }
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if (users.find(u => u.email === email)) {
      alert("Account already exists.");
      return;
    }
  
    users.push({ email, password, role });
    localStorage.setItem("users", JSON.stringify(users));
    alert("Account created! Please login.");
    showForm("login");
  }
  
  function login() {
    const email = document.getElementById("loginEmail").value;
    const password = document.getElementById("loginPassword").value;
  
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(u => u.email === email && u.password === password);
  
    if (!user) {
      alert("Invalid email or password.");
      return;
    }
  
    localStorage.setItem("loggedInUser", JSON.stringify(user));
  
    if (user.role === "student") {
      window.location.href = "student-dashboard.html";
    } else {
      window.location.href = "teacher-dashboard.html";
    }
  }
  
  function resetPassword() {
    const email = prompt("Enter your email to reset password:");
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const index = users.findIndex(u => u.email === email);
  
    if (index === -1) {
      alert("Email not found.");
      return;
    }
  
    const newPassword = prompt("Enter new password (1 capital, 1 number, 1 symbol):");
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
    if (!passwordRegex.test(newPassword)) {
      alert("Password format incorrect.");
      return;
    }
  
    users[index].password = newPassword;
    localStorage.setItem("users", JSON.stringify(users));
    alert("Password updated successfully!");
  }
  