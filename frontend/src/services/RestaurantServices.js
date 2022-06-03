import axios from "axios"

export const GetAllRestaurants = async () => {
  const res = await axios.get(`http://localhost:8000/restaurants`)
  // console.log("restaurant_list", res.data)
  return res.data
}