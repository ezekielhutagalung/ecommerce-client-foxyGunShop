import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://ezekiel-foxy-gun-shop-ecommerc.herokuapp.com'
})

export default instance
