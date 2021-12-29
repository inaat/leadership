<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>
// import appHeader from "@/layouts/header";
import { mapGetters, mapActions } from 'vuex'
export default {
  name: "Application",
  components: {
  },

  computed: {
    ...mapGetters(['isAuth']),
  },
  methods: {
    ...mapActions('user', ['commonCall'])
  },
  mounted(){
    console.log(this.isAuth, 'this.isAuth');
    if(this.isAuth) this.commonCall()
  }
};
</script>

