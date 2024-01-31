import { defineStore } from 'pinia'
import router from '@/router'
import { useRouter } from 'vue-router'

export const useUserStore = defineStore('user', {
  state: () => ({
    activeUser: localStorage.getItem('activeUser') ?? null,
    userToken: localStorage.getItem('userToken') ?? null,
    userName: localStorage.getItem('userName') ?? null
  }),
  getters: {
    isLoggedIn: (state) => {
      // Mengembalikan true jika ada pengguna yang aktif, sebaliknya false.
      return !!state.activeUser
    },
    userDisplayName: (state) => {
      // Mengembalikan nama pengguna atau "Guest" jika tidak ada.
      return state.userName
    }
  },
  actions: {
    login({ user, token }) {
      this.activeUser = user
      this.userToken = token
      this.userName = user.name

      // Simpan informasi pengguna aktif ke localStorage
      localStorage.setItem('activeUser', JSON.stringify(this.activeUser))
      localStorage.setItem('userName', this.userName)
      localStorage.setItem('userToken', 'Bearer ' + token)

      router.push('/')
    },
    logout() {
      this.activeUser = null
      this.userToken = null
      this.userName = null

      // Hapus informasi pengguna aktif dari localStorage pada logout
      localStorage.removeItem('activeUser')
      localStorage.removeItem('userName')
      localStorage.removeItem('userToken')

      router.push('login')
    }
  }
})
