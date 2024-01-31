<template>
  <NavbarMobile />
  <NavbarDesktop />
  <div class="content">
    <!-- render vue router -->
    <router-view></router-view>
  </div>
  <Footer />
  <BottomBarMobile />
</template>

<script>
import NavbarDesktop from '@/components/NavbarDesktop.vue'
import BottomBarMobile from '@/components/BottomBarMobile.vue'
import Rating from '@/components/icons/Rating.vue'
import Footer from '@/components/Footer.vue'
import NavbarMobile from '@/components/NavbarMobile.vue'
import axiosClient from '@/plugins/axios'
import router from '@/router'

import { ref } from 'vue'

import { useUserStore } from '@/stores/user'

export default {
  components: {
    NavbarDesktop,
    BottomBarMobile,
    Rating,
    Footer,
    NavbarMobile
  },
  data() {
    const userStore = useUserStore()
    return {
      //state loggedIn with localStorage
      loggedIn: ref(userStore.isLoggedIn),
      //state token
      token: localStorage.getItem('userToken'),
      //state user logged In
      user: []
    }
  },
  mounted() {
    const activeUser = localStorage.getItem('activeUser')
    if (activeUser) {
      this.fetchUserData()
    }
  },
  created() {
    // No need to call fetchUserData here
  },
  methods: {
    async fetchUserData() {
      try {
        const response = await axiosClient.get('user', {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('userToken')
          }
        })
        if (response) {
          this.user = response.data
        }
      } catch (error) {}
    }
  }
}
</script>
