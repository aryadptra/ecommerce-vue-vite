<template>
  <section class="auth-section">
    <div class="container">
      <div class="row">
        <div class="col-12 col-md-6 d-none d-md-block d-lg-block">
          <img src="../../assets/images/login-img.png" class="login-image" alt="" srcset="" />
        </div>
        <div class="col-12 col-md-6 my-auto">
          <h2>Belanja kebutuhan komputer Anda menjadi lebih mudah</h2>
          <form @submit.prevent="onSubmit">
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
              <a href="">Daftar di sini</a>
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
      email: '',
      password: ''
    })

    const router = useRouter()
    const userStore = useUserStore()
    const validation = ref([])

    const toast = useToast()
    const onSubmit = async () => {
      try {
        await axiosClient
          .post('login', {
            email: form.email,
            password: form.password
          })
          .then((response) => {
            const user = response.data.data.user
            const token = response.data.data.token
            userStore.login({ user, token })

            router.push('/')
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
