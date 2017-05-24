import axios from 'axios'

const DOMAIN = 'https://demo6288389.mockable.io'

const signService = (payload) => {
  console.log('service', payload)
  return axios.get(`${DOMAIN}/signin`)
}

export { signService }