<template>
  <div class="page">
    <NavigationBar />

    <main class="cpu-hero">
      <div class="cpu-left">
        <h2 class="established">⸻ ESTABLISHED 1920</h2>
        <h1 class="headline">
          Education with <span class="highlight"><i>Purpose</i></span>,<br> Leadership with <span class="highlight"><i>Vision</i></span>
        </h1>
        <p class="description">
          Horizon Academic Consortium University shapes purposeful education and visionary leadership, rooted in
          <strong>Scientia et Fides</strong> (Science and Faith).
        </p>
        <div class="buttons">
          <button class="primary">Explore Academics</button>
          <button class="secondary">Request Information</button>
        </div>

        <div class="stats">
          <div class="stat-card"><h3>118+</h3><p>Years of Excellence</p></div>
          <div class="stat-card"><h3>20+</h3><p>Academic Programs</p></div>
          <div class="stat-card"><h3>5,000+</h3><p>Active Students</p></div>
          <div class="stat-card"><h3>20+</h3><p>Partner Institutions</p></div>
        </div>
      </div>

      <RightSection />
    </main>

    <section class="admissions-card">
  <h2>Admissions Overview</h2>
  <p>
    Central Philippine University welcomes applicants through a simple process:
    submit basic requirements, choose your preferred program, and follow the
    enrollment steps guided by our Registrar’s Office.
  </p>
  <ul class="admissions-list">
    <li>✔ Application form submission</li>
    <li>✔ Basic requirements (transcript, ID, photos)</li>
    <li>✔ Program selection and advising</li>
    <li>✔ Enrollment confirmation</li>
  </ul>
  <router-link to="/admissions" class="admissions-btn">
    Start
  </router-link>
</section>

    <Footer />
  </div>
</template>

<script>
import NavigationBar from "@/components/NavigationBar.vue";
import RightSection from "@/components/RightSection.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Prelim",
  components: { NavigationBar, RightSection, Footer }
};
</script>

<style scoped>
.page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.cpu-hero {
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 40px;
}

.cpu-left {
  max-width: 50%;
}

.established {
  font-size: 18px;
  font-weight: 700;
  color: #b08c00;
  margin-bottom: 10px;
}

.headline {
  font-size: 72px;
  font-weight: 700;
  color: #2B1B5E;
  margin: 15px 0;
  line-height: 1.2;
}

.highlight {
  color: #7A5A00;
}

.description {
  font-size: 25px;
  line-height: 1.6;
  margin: 20px 0;
  color: #333;
}

.buttons {
  margin-top: 25px;
}

.primary {
  background: #2B1B5E;
  color: white;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
  margin-right: 15px;
  border: none;
  cursor: pointer;
  border-radius: 6px;
}

.secondary {
  background: #fff;
  color: #2B1B5E;
  padding: 12px 24px;
  font-size: 16px;
  font-weight: 700;
  border: 2px solid #2B1B5E;
  cursor: pointer;
  border-radius: 6px;
}

.stats {
  display: flex;
  gap: 20px;
  margin-top: 40px;
}

.stat-card {
  background: white;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  border-radius: 12px;
  text-align: center;
  flex: 1;
}

.admissions-card {
  margin: 60px auto;
  max-width: 700px;
  text-align: center;
  padding: 28px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.admissions-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
}

.admissions-card h2 {
  font-size: 22px;
  margin-bottom: 12px;
  color: #2b1b5e;
}

.admissions-card p {
  font-size: 15px;
  color: #475569;
  margin-bottom: 16px;
  line-height: 1.6;
}

.admissions-list {
  list-style: none;
  padding: 0;
  margin: 0 0 20px;
}

.admissions-list li {
  font-size: 14px;
  color: #334155;
  margin: 6px 0;
}

.admissions-btn {
  display: inline-block;
  padding: 10px 22px;
  background: #2b1b5e;
  color: #fff;
  border-radius: 6px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s ease;
}

.admissions-btn:hover {
  background: #3a0ca3;
}


.site-footer {
  margin-top: auto;
}

@media (max-width: 768px) {
  .cpu-hero {
    flex-direction: column;
    text-align: center;
    gap: 40px;
  }
  .cpu-left {
    max-width: 100%;
  }
  .headline {
    font-size: 36px;
  }
}

</style>
