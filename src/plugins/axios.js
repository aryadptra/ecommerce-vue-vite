import axios from 'axios'
import router from '@/router'

const axiosClient = axios.create({
  baseURL: 'http://127.0.0.1:8000/api/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'multipart/form-data'
  }
})

axiosClient.interceptors.request.use((config) => {
  return config
})

axiosClient.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    // Tangkap nilai status dari respons error
    const statusCode = error.response ? error.response.status : null

    // Lakukan sesuatu dengan nilai status, misalnya, tampilkan pesan kesalahan atau lakukan tindakan tertentu

    // Dilemparkan kembali error agar dapat ditangani oleh blok catch di pemanggilan aslinya
    throw error
  }
)

export default axiosClient
