import { useState } from "react";
import DataContext from "./DataContext";
import MainContext from "./MainContext";
import UserContext from "./UserContext";

export const ContextProvider = ({ children }) => {
    // Header state
    const [popup, setPopup] = useState(false);

    return (
        <MainContext.Provider value={{
            header: {},
            main: {
                popup,
                setPopup,
            },
            footer: {},
        }}>
            <UserContext.Provider >
                <DataContext>
                    {children}
                </DataContext>
            </UserContext.Provider>
        </MainContext.Provider>
    )
}