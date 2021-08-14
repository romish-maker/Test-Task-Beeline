import {v1} from "uuid";


enum ACTION_MOBILE {
    SET_PRICE_MOBILE = 'mobileInternet/SET_PRICE_MOBILE'
}
export const initialMobileState = {
    optionValue:
        [
            {id: v1(), price: 500, value: 50, title: 'минут'},
            {id: v1(), price: 600, value: 100, title: 'минут'},
            {id: v1(), price: 1100, value: 200, title: 'минут'}
        ] as MobileValueType[],
    value: 0,
    generallyValue: 0
}

type OptionState = typeof initialMobileState

export type MobileValueType = {
    id: string;
    price: number;
    value: number;
    title: string;
    generallyValue: number
}


export const mobileInternetReducer = (state: OptionState = initialMobileState, action: ActionType) => {
    switch (action.type) {
        case ACTION_MOBILE.SET_PRICE_MOBILE:
            return {
                ...state,
                value: action.value,
                generallyValue: action.generallySum
            }

        default:
            return state;
    }
}
export type setPrice = ReturnType<typeof setPriceForMobile>
export type ActionType = setPrice
export const setPriceForMobile = (value: number, id: string, generallySum: number) => ({type: ACTION_MOBILE.SET_PRICE_MOBILE, value, id, generallySum} as const)