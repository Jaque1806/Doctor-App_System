import { AppContext } from "./AppContext";
import { doctors } from "../assets/assets 2";

// Create the context provider function
const AppContextProvider = (props) => {

    // Whatever we will add in this value object we can access that in any component.
    const value = { doctors }

    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider