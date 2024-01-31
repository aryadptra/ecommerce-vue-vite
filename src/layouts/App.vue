<template>
  <NavbarMobile :loggedIn="loggedIn" />
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

export default {
  components: {
    NavbarDesktop,
    BottomBarMobile,
    Rating,
    Footer,
    NavbarMobile
  }
}
</script>
