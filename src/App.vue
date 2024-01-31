<template>
  <component :is="$route.meta.layout || 'div'">
    <router-view></router-view>
  </component>
</template>

<script>
import axiosClient from './plugins/axios'
import router from './router'

export default {
  data() {
    return {
      //state loggedIn with localStorage
      loggedIn: localStorage.getItem('activeUser'),
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
      } catch (error) {
        if (error.response.status === 401) {
        }
      }
    }
  }
}
</script>
