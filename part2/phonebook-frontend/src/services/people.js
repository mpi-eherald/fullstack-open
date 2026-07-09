import axios from 'axios'
const baseUrl = 'api/people'

const getAll = () => {
  // const request = axios.get(baseUrl)
  // console.log('getAll request', request)
  // return request.then(response => response.data)

  return axios
    .get(baseUrl)
    .then(response => response.data)
}

const create = (newObject) => {
  // const request = axios.post(baseUrl, newObject)
  // return request.then(response => response.data)
  
  return axios
    .post(baseUrl, newObject)
    .then(response => response.data)
}

const deleteContact = (id) => {
  // const request = axios.delete(`${baseUrl}/${id}`)
  // return request.then(response => response.data)
  
  return axios
    .delete(`${baseUrl}/${id}`)
    .then(response => response.data)
}

const update = (newObject) => {
  // const request = axios.put(`${baseUrl}/${newObject.id}`, newObject)
  // return request.then(response => response.data)

  return axios
    .put(`${baseUrl}/${newObject.id}`, newObject)
    .then(response => response.data)
}

export default {
  getAll,
  create,
  deleteContact,
  update
}