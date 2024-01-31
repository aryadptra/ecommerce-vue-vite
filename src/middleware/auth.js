import { useUserStore } from '@/stores/user'

export default function auth({ next, store }) {
  const userStore = useUserStore()

  if (userStore.isLoggedIn) {
    return next()
  }
  return next({ name: 'login' })
}
