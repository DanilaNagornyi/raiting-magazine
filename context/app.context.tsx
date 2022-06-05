import {createContext, PropsWithChildren, ReactNode, useState} from "react";
import {MenuItemTypes} from "../interfaces/menu.interface";
import {TopLevelCategoryTypes} from "../interfaces/page.interface";


export interface IAppContextTypes {
    menu: MenuItemTypes[];
    firstCategory: TopLevelCategoryTypes;
    setMenu?: (newMenu: MenuItemTypes[]) => void;
}

export const AppContext = createContext<IAppContextTypes>({
    menu: [], firstCategory: TopLevelCategoryTypes.Courses
});

export const AppContextProvider = ({ menu, firstCategory, children }: PropsWithChildren<IAppContextTypes>): JSX.Element => {
    const [menuState, setMenuState] = useState<MenuItemTypes[]>(menu);
    const setMenu = (newMenu: MenuItemTypes[]) => {
        setMenuState(newMenu);
    }

    return <AppContext.Provider value={{menu: menuState, firstCategory, setMenu}}>
        {children}
    </AppContext.Provider>
}