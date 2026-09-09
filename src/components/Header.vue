<template>
  <header class="header-wrapper">
    <div class="cpu-header">
      <div class="logo-title">
        <img src="@/assets/HAC.png" alt="HAC Logo" class="logo" />
        <div class="title-text">
          <h1 class="university-name">Horizon Academic Consortium University</h1>
          <p class="motto">SCIENTIA ET FIDES</p>
        </div>
      </div>

      <nav class="nav-section">
        <ul class="nav-links">
          <li><a href="#" class="active">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Admissions</a></li>
          <li><a href="#">Academics</a></li>
          <li><a href="#">Campus Life</a></li>
          <li><a href="#">News</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <div class="actions">
          <button class="login-btn">Portal Login</button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header-wrapper {
  width: 100%;
  background-color: #ffffff;
}

.cpu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 60px;
  background-color: #fff;
  border-bottom: 2px solid #eee;
  font-family: "Segoe UI", Arial, sans-serif;
  padding: 20px 60px;
}

.logo-title {
  display: flex;
  align-items: center;
}
.logo {
  width: auto;
  height: auto;
  margin: 15px;
  object-fit: contain;
  display: block;
}
.university-name {
  margin: 0;
  font-size: 28px;
  font-weight: 700;
  color: #4b0082;
  letter-spacing: 0.5px;
}
.motto {
  margin: 0;
  font-size: 20px;
  font-weight: 600;
  color: #f39c12;
  letter-spacing: 3px;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 28px;
}

.nav-links {
  list-style: none;
  display: flex;
  align-items: center;
  gap: 20px; 
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  color: #333333;
  transition: color 0.15s ease;
}

.nav-links a:hover {
  color: #2b1b5e;
}

.nav-links a.active {
  color: #2b1b5e;
  position: relative;
}

.nav-links a.active::after {
  content: "";
  position: absolute;
  bottom: -8px; 
  left: 0;
  width: 100%;
  height: 3px; 
  background-color: #c8a100;
}

.actions {
  display: flex;
  align-items: center;
}

.login-btn {
  background-color: #1b0a5a; 
  color: #ffffff;
  border: none;
  padding: 10px 20px;
  font-size: 13px;
  font-weight: 700;
  border-radius: 6px; 
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.login-btn:hover {
  background-color: #11053b;
}
</style>