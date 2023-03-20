import React, { createContext, useState } from "react";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [data, setData] = useState(null);
  const [hide, setHide] = useState(true);
  const [details, setDetails] = useState([])

  return (
    <div>
      <UserContext.Provider value={{ data, setData, hide, setHide,details, setDetails}}>
        {children}
      </UserContext.Provider>
    </div>
  );
};

export default UserProvider;
export { UserContext };
