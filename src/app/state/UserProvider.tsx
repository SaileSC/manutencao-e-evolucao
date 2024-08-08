"use client";

import { createContext, useState } from "react";
import { UserLogin, UserResponseAPI } from "../types/user";
import { loginUser } from "../service/user";

type IUser = {
  user: UserResponseAPI | null;
  setUser: React.Dispatch<UserResponseAPI | null>;
  login: (user: UserLogin) => Promise<UserResponseAPI | null>;
};

export const UserContext = createContext<IUser>({
  user: null,
  setUser: () => {},
  login: async () => null,
});

interface UserProviderProps {
  children: React.ReactNode;
}

const UserProvider = ({ children }: UserProviderProps) => {
  const [user, setUser] = useState<UserResponseAPI | null>(null);

  const login = async (user: UserLogin): Promise<UserResponseAPI | null> => {
    const userResponse = await loginUser(user);

    if (userResponse) {
      setUser(userResponse);
    }

    return userResponse;
  };

  return (
    <UserContext.Provider value={{ user, setUser, login }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
