import React, { createContext, useState } from "react";

// Types
export type Session = {
  session_id: string;
};
export type User = {
  username: string;
  session: Session;
};
type UserContext = {
  user: User;
  setUser: React.Dispatch<React.SetStateAction<User>>;
};
type UserContextConsumerProps = {
  children: React.ReactNode;
};

// Initial values
const initialUser = {} as User;
const initialUserContext = {} as UserContext;

export const Context = createContext(initialUserContext);

const ContextConsumer: React.FC<UserContextConsumerProps> = ({
  children,
}: UserContextConsumerProps) => {
  const [user, setUser] = useState(initialUser);
  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};

export default ContextConsumer;
