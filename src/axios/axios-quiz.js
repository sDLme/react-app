import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-id-app-default-rtdb.europe-west1.firebasedatabase.app'
})