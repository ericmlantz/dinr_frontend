import React from 'react'

const RestaurantContext = React.createContext(null)

const useRestaurant = () => React.useContext(RestaurantContext)

export { RestaurantContext, useRestaurant }