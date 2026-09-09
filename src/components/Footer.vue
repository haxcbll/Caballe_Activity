<template>
  <footer class="site-footer">
    <div class="footer-links">
      <a href="#">About Us</a>
      <a href="#">Academics</a>
      <a href="#">Campus Life</a>
      <a href="#">News</a>
      <a href="#">Contact</a>
    </div>

    <div class="footer-contact">
      <p>Email: info@university.edu</p>
      <p>Phone: (033) 123-4567</p>
      <p>Address: Jaro, Iloilo City, Philippines</p>
    </div>

    <div class="footer-social">
      <a href="#">Facebook</a>
      <a href="#">Twitter</a>
      <a href="#">Instagram</a>
    </div>

    <p class="copyright">© 2026 Horizon Academic Consortium University. All rights reserved.</p>
  </footer>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
.site-footer {
  background-color: #0f172a;
  color: #ffffff;
  padding: 30px;
  text-align: center;
  font-size: 14px;
}
.footer-links, .footer-contact, .footer-social {
  margin-bottom: 15px;
}
.footer-links a, .footer-social a {
  margin: 0 10px;
  color: #facc15;
  text-decoration: none;
}
.footer-links a:hover, .footer-social a:hover {
  text-decoration: underline;
}
</style>