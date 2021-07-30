import { useContext, createContext, useEffect, useState } from "react";

let AppContext = createContext();

export const AppProvider = function ({ children }) {
    let [darkTheme, setDarkTheme] = useState(true);

    useEffect(() => {

    }, []);

    return <AppContext.Provider value={{ darkTheme, setDarkTheme }}>{children}</AppContext.Provider>
}

export default function useApp() {
    return useContext(AppContext);
}