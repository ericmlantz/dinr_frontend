import React from "react";

const UserContext = React.createContext({
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
  });

  const useUser = () => React.useContext(useUser)(CurrencyContext);

export {UserContext, useUser}