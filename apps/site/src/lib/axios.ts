import axios from 'axios'

export const apiLocal = axios.create({
  baseURL: '/api',
})
