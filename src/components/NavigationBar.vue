<template>
  <header class="cpu-header">
    <div class="logo-title">
      <img src="@/assets/HAC.png" alt="HAC Logo" class="logo" />
      <div class="title-text">
        <h1 class="university-name">Horizon Academic Consortium University</h1>
        <p class="motto">SCIENTIA ET FIDES</p>
      </div>
    </div>

    <nav class="nav-section">
      <ul class="nav-links">
        <li><router-link to="/" class="active-link" exact>Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/admissions">Admissions</router-link></li>
        <li><router-link to="/academics">Academics</router-link></li>
        <li><router-link to="/campus-life">Campus Life</router-link></li>
        <li><router-link to="/news">News</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
        <li><router-link to="/SampleData">Sample Data</router-link></li>
        <li><router-link to="/SampleMethods">Sample Methods</router-link></li>
        <li><router-link to="/Sample-vmodel">Sample Vmodel</router-link></li>
        <li><router-link to="/activity2-live">Activity 2: Live Profile</router-link></li>
      </ul>
      <div class="actions">
        <button class="login-btn">Portal Login</button>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "NavigationBar"
};
</script>

<style scoped>
.cpu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 60px;
  background-color: #fff;
  font-family: "Segoe UI", Arial, sans-serif;
  border-bottom: 1px solid #eee;
}

.logo-title {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.logo {
  width: 80px;
  height: 60px;
  margin: 15px;
  object-fit: contain;
  display: block;
}
.university-name {
  margin: 0;
  font-size: 30px;
  font-weight: 700;
  color: #3a0ca3; 
}
.motto {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  color: #b08c00;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.nav-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 25px;
  margin: 0;
  padding: 0;
}

.nav-links li {
  font-size: 16px;
  font-weight: 600;
}

.nav-links a {
  text-decoration: none;
  color: #3a0ca3;
  padding-bottom: 4px;
  border-bottom: 3px solid transparent;
  transition: border-color 0.3s;
}

.nav-links a:hover {
  border-bottom: 3px solid #b08c00;
}

.active-link {
  border-bottom: 3px solid #b08c00;
  font-weight: 700;
}

.actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.search-icon {
  font-size: 18px;
  cursor: pointer;
  color: #3a0ca3;
}

.login-btn {
  background-color: #3a0ca3;
  color: white;
  border: none;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 700;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-btn:hover {
  background-color: #2a068d;
}
</style>
