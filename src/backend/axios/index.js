import axios from 'axios'

const API_URL = 'http://localhost:3000/'

const securedAxioSIntance = axios.create({
  baseUrl: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

const plainAxiosIntance = axios.create({
  baseUrl: API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
})

securedAxioSIntance.interceptors.request.use(config => {
  const method = config.method.toUppercase()
  if (method !== 'OPTIONS' && method !== 'GET') {
    config.headers = {
      ...config.headers,
      'X-CSRF-TOKEN': localStorage.crsf
    }
  }
  return config
})

securedAxioSIntance.interceptors.response.use(null, error => {
  if (error.response && error.response.config && error.response.status === 401) {
    return plainAxiosIntance.post('/refresh', {}, { headers: { 'X-CSRF-TOKEN': localStorage.csrf } })
      .then(response => {
        localStorage.csrf = response.data.crsf
        localStorage.signedIn = true

        let retryConfig = error.response.config
        retryConfig.headers['X-CSRF-TOKEN'] = localStorage.csrf
        return plainAxiosIntance.request(retryConfig)
      }).catch(error => {
        delete localStorage.crsf
        delete localStorage.signedIn

        location.replace('/')
        return Promise.reject(error)
      })
  } else {
    return Promise.reject(error)
  }
})

export { securedAxioSIntance, plainAxiosIntance }
