import {createContext} from "react";

export const UserNameContext = createContext({
    userName: "",
    setUserName: (user:string) => {console.log(user)}
});