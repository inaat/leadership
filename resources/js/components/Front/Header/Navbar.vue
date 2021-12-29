<template>
  <div class="header_responsive">
    <header>
      <div class="container">
        <div class="logo">
          <img
            alt="Logo"
            class="h-20 lg:h-24"
            aria-label="Nettbutikk logo"
            src="../../../../img/logo.png"
          />
          <h3>SkillsDev</h3>
        </div>
        <div class="links">
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact us</a></li>
            <template v-if="isAuth">
              <li><a href="#" @click="logout">Logout</a></li>
            </template>
            <template v-else>
              <li><router-link :to="{ name: 'login' }">Login </router-link></li>
            </template>
          </ul>
        </div>
        <div class="overlay"></div>
        <div v-on:click="greet" class="hamburger-menu">
          <div class="bar"></div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Navbar",
  computed: {
    ...mapGetters(["isAuth"]),
  },
  methods: {
    ...mapActions(["isAuthCheck"]),

    greet: function (event) {
      var big_wrapper = document.querySelector(".big-wrapper");
      big_wrapper.classList.toggle("active");
    },
     ...mapActions("user", ["logOutUser"]),
    async logout() {
      await this.logOutUser()
        .then((r) => {
          window.location.reload();
          this.$router.push({ name: "landing" });
        })
        .catch((e) => {
          alert('error');
        });
    },
  },
  created() {
    this.isAuthCheck();
  },
};
</script>




