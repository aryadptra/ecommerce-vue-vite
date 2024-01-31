<template>
  <section class="auth-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 d-none d-md-block d-lg-block">
          <img src="../../assets/images/login-img.png" class="login-image" alt="" srcset="" />
        </div>
        <div class="col-12 col-md-6 my-auto">
          <h2>Daftar sekarang untuk nikmati kemudahan dalam berbelanja</h2>
          <form @submit.prevent="onSubmit">
            <div class="mb-3">
              <label>Nama</label>
              <input
                name="name"
                type="name"
                v-model="form.name"
                class="form-control"
                placeholder="Nama Lengkap"
                required
              />
            </div>
            <div class="mb-3">
              <label>Email address</label>
              <input
                name="email"
                type="email"
                v-model="form.email"
                class="form-control"
                placeholder="Email Address"
                required
              />
            </div>
            <div class="mb-3">
              <label>Password</label>
              <input
                name="password"
                type="password"
                v-model="form.password"
                class="form-control"
                placeholder="Password"
                required
              />
            </div>

            <div class="mb-3">
              <label>Ulangi Password</label>
              <input
                name="re-password"
                type="password"
                v-model="form.repassword"
                class="form-control"
                placeholder="Ulangi Password"
                required
              />
            </div>
            <div class="mb-3">
              <router-link :to="{ name: 'login' }">Sudah daftar? Masuk di sini</router-link>
            </div>
            <div class="d-grid gap-2 mb-3">
              <button type="submit" class="btn btn-primary">Masuk</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axiosClient from '@/plugins/axios'
import { useToast } from 'vue-toast-notification'
import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'
import 'vue-toast-notification/dist/theme-sugar.css'
import { reactive, ref } from 'vue'

export default {
  setup() {
    const form = reactive({
      name: '',
      email: '',
      password: '',
      repassword: ''
    })

    const router = useRouter()
    const userStore = useUserStore()
    const validation = ref([])

    const toast = useToast()
    const onSubmit = async () => {
      // Memeriksa apakah repassword sama dengan password
      if (form.password !== form.repassword) {
        // Jika tidak sama, tambahkan pesan kesalahan
        toast.error('Password tidak sama.', {
          position: 'top-right',
          timeout: 3000
        })
      } else if (form.password.length >= 8) {
        try {
          await axiosClient
            .post('register', {
              name: form.name,
              email: form.email,
              password: form.password
            })
            .then((response) => {
              router.push('/login')
              toast.success(response.data.message, {
                position: 'top-right',
                timeout: 2000
              })
            })
        } catch (error) {
          toast.error(error.response.data.message[0], {
            timeout: 2000,
            position: 'top-right'
          })
        }
      } else {
        toast.error('Password minimal 8 huruf', {
          timeout: 2000,
          position: 'top-right'
        })
      }
    }

    return {
      router,
      form,
      validation,
      toast,
      onSubmit
    }
  }
}
</script>
