import {combineReducers, createStore} from "redux";
import {optionReducer} from "./optionReducer";

const rootReducer = combineReducers({
    option: optionReducer
})


export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store