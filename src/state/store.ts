import {combineReducers, createStore} from "redux";
import {optionReducer} from "./Reducers/optionReducer";
import {mobileInternetReducer} from "./Reducers/mobileInternetReducer";
import {mobileUnlimitedReducer} from "./Reducers/mobileUnlimitedReducer";
import {formReducer} from "./Reducers/formReducer";

const rootReducer = combineReducers({
    option: optionReducer,
    internet: mobileInternetReducer,
    unlimited: mobileUnlimitedReducer,
    form: formReducer
})


export const store = createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store