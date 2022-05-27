import { useState } from 'react'
import { AddNewUser } from '../services/UserServices'

const CreateUser = () => {
  const [addUser, setAddUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    username: '',
    password: '',
    street_loc: '',
    apt_loc: '',
    city_loc: '',
    state_loc: '',
    zip_loc: '',
  })

  const handleChange = (event) => {
    setAddUser({...addUser, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await AddNewUser({
      firstName: addUser.firstName,
      lastName: addUser.lastName,
      email: addUser.email,
      username: addUser.username,
      password: addUser.password,
      street_loc: addUser.street_loc,
      apt_loc: addUser.apt_loc,
      city_loc: addUser.city_loc,
      state_loc: addUser.state_loc.toUpperCase(),
      zip_loc : addUser.zip_loc,
    })
    setAddUser({
      firstName: '',
      lastName: '',
      email: '',
      username: '',
      password: '',
      street_loc: '',
      apt_loc: '',
      city_loc: '',
      state_loc: '',
      zip_loc: '',
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
            {/* First Name */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First Name"
                onChange={handleChange}
                value={addUser.firstName}
              />
            </div>
            {/* Last Name */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value={addUser.lastName}
              />
            </div>
            {/* Email */}
            <div className="form-item">
              <input
                className="reg-box"
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
                value={addUser.email}
              />
            </div>
            {/* Username */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="username"
                name="username"
                placeholder="Username"
                onChange={handleChange}
                value={addUser.username}
              />
            </div>
            {/* Password */}
            <div className="form-item">
              <input
                className="reg-box"
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                value={addUser.password}
              />
            </div>
            {/* Street Address */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="street_loc"
                name="street_loc"
                placeholder="Street Address"
                onChange={handleChange}
                value={addUser.street_loc}
              />
            </div>
            {/* Apt, Unit, etc */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="apt_loc"
                name="apt_loc"
                placeholder="Apt, Unit, Post box, etc"
                onChange={handleChange}
                value={addUser.apt_loc}
              />
            </div>
            {/* City */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="city_loc"
                name="city_loc"
                placeholder="City"
                onChange={handleChange}
                value={addUser.city_loc}
              />
            </div>
            {/* State */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="state_loc"
                name="state_loc"
                placeholder="State Abbreviation"
                maxLength='2'
                onChange={handleChange}
                value={addUser.state_loc}
              />
            </div>
            {/* Zip Code */}
            <div className="form-item">
              <input
                className="reg-box"
                type="text"
                id="zip_loc"
                name="zip_loc"
                placeholder="Zip Code"
                onChange={handleChange}
                value={addUser.zip_loc}
              />
            </div>
          <button type='submit'></button>
        </form>
      </div>
  )
}

export default CreateUser