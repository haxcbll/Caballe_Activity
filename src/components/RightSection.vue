<template>
  <div class="cpu-right-card">
    <div class="logo-wrapper">
      <img src="@/assets/HAC.png" alt="HAC Seal" class="hero-logo" />
    </div>
    <h2 class="right-title">Horizon Academic Consortium<br />University</h2>
    <h3 class="right-motto">SCIENTIA ET FIDES</h3>
    <p class="heritage">“Advancing Knowledge, <br />Inspiring Excellence.”</p>
  </div>
</template>

<script>
export default {
  name: "RightSection"
};
</script>

<style scoped>
.cpu-right-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 480px;
  padding: 60px 40px;
  background: linear-gradient(135deg, #C8A100 5%, #FFFFFF 60%);
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05); 
  box-sizing: border-box;
}

.logo-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 25px;
}

.hero-logo {
  width: 150px;
  height: 150px;
  object-fit: contain;
}

.right-title {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 32px;
  font-weight: 700;
  color: #2B1B5E;
  line-height: 1.2;
  margin: 0 0 15px 0;
}

.right-motto {
  font-family: "Segoe UI", Arial, sans-serif;
  font-size: 14px;
  font-weight: 700;
  color: #7A5A00; 
  letter-spacing: 3.5px;
  margin: 0 0 35px 0;
}

.heritage {
  font-family: "Georgia", serif;
  font-size: 18px;
  font-style: italic;
  font-weight: 500;
  color: #333333;
  line-height: 1.4;
  margin: 0;
}
</style>
