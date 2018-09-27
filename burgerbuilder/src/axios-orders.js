import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://reactmy-burger.firebaseio.com/'
})

export default instance
