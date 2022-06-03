import axios from "axios"

export const AddNewUser = async (data) => {
  const res = await axios.post(`http://localhost:8000/users`, data)
  return res.data
}

export const GetAllUsers = async () => {
  const res = await axios.get(`http://localhost:8000/users`)
  return res.data
}

export const GetCurrentUser = async (pk) => {
  const res = await axios.get(`http://localhost:8000/users/${pk}`)
  console.log(res.data)
  return res.data

}