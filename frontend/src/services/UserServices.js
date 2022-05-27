import axios from "axios"

export const AddNewUser = async (data) => {
  const res = await axios.post(`http://localhost:8000/user`, data)
  return res.data
}