import { createContext } from "react";
import { IItem } from "../interfaces/IItem";

export const INITIAL_STATE = {
    themeName: "light",
    items: [] as IItem[],
};

export type InitalStateType = typeof INITIAL_STATE;

export const AppContext = createContext({
    state: INITIAL_STATE,
    toggleTheme: () => {},
    createNewItem: () => {},
    deleteItem: (id: string) => {},
    toggleIsEditing: (id: string) => {},
    editItem: (payload: IItem) => {},
});
