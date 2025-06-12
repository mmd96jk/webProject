import { createContext } from "react";

const MainContext = createContext({
    userInfos: {},
    isLoggedIn: false
})

export default MainContext