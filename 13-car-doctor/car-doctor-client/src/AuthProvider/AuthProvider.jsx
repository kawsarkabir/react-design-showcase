import { createContext, useState } from "react";

import { createUserWithEmailAndPassword } from "firebase/auth";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // create a new user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userInfo = {
    user,
    createUser,
  };
  return (
    <AuthContext.Provider value={userInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
