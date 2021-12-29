<template>
   <!-------Footer ----->
      <footer class="footer-distributed">

        <div class="footer-left">
          <h3>Skills<span>Development</span></h3>

          <p class="footer-links">
            <a href="#">Home</a>
            |
            <a href="#">About</a>
            |
            <a href="#">Contact</a>
            |
            <a href="#">Blog</a>
          </p>

          <p class="footer-company-name">Copyright © 2021 <strong>SKillsDev</strong> All rights reserved</p>
        </div>

        <div class="footer-center">
          <div>
            <i class="fa fa-map-marker"></i>
            <p><span>Marrakech</span>
              Morocco</p>
          </div>

          <div>
            <i class="fa fa-phone"></i>
            <p>+212677283209</p>
          </div>
          <div>
            <i class="fa fa-envelope"></i>
            <p><a href="#">xyz@gmail.com</a></p>
          </div>
        </div>
        <div class="footer-right">
          <p class="footer-company-about">
            <span>About the company</span>
            <strong>SKills Development</strong> is a web site that give u the chane to developp ur skilss by playing
            simple games in such a different subject.
            and
            Effects along with
            HTML, JavaScript and Projects using C/C++.
          </p>
          <div class="footer-icons">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>

          </div>
        </div>
      </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    todayDate() {
      return new Date().getFullYear();
    },
  },
};
</script>
