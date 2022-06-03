import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { AddNewUser } from '../services/UserServices'

const CreateUser = ({user, setUser, GetSingleUser, restaurants}) => {

  //Hooks
  const navigate = useNavigate()
  //-------------------------

  const handleChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    await AddNewUser({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
      password: user.password,
      street_loc: user.street_loc,
      apt_loc: user.apt_loc,
      city_loc: user.city_loc,
      state_loc: user.state_loc.toUpperCase(),
      zip_loc: user.zip_loc,
      matches: restaurants,
    })
    setUser({
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
    navigate('/matches')
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
                value={user.firstName}
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
                value={user.lastName}
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
                value={user.email}
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
                value={user.username}
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
                value={user.password}
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
                value={user.street_loc}
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
                value={user.apt_loc}
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
                value={user.city_loc}
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
                value={user.state_loc}
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
                value={user.zip_loc}
              />
            </div>
          <button type='submit'></button>
        </form>
      </div>
  )
}

export default CreateUser