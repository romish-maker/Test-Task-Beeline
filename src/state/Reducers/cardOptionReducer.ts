import {v1} from "uuid";
import {ACTION_MOBILE, setSummaryPrice} from "./mobileUnlimitedReducer";

export enum ACTION_OPTIONS {
    SET_PRICE = 'optionReducer/SET_PRICE',
    SET_PRICE_WITH_S = 'optionReducer/SET_PRICE_WITH_S'
}
export const initialOptionState = {
    optionValue:
        [
            {id: v1(), price: 2200, value: 10, title: 'гб'},
            {id: v1(), price: 2500, value: 15, title: 'гб'},
            {id: v1(), price: 3000, value: 30, title: 'гб'}
        ] as OptionValueType[],
    value: 0,
    generallyValue: 0
}

export type OptionState = typeof initialOptionState
export type OptionValueType = {
    id: string;
    price: number;
    value: number;
    title: string;
    generallyValue: number
}


export const cardOptionReducer = (state: OptionState = initialOptionState, action: ActionType) => {
    switch (action.type) {
        case ACTION_OPTIONS.SET_PRICE:
            return {
                ...state,
                value: action.value,
                generallyValue: action.generallySum,
            }
        case ACTION_OPTIONS.SET_PRICE_WITH_S:
            return {
                ...state,
                generallyValue: action.generallySumPlus,
            }
            case ACTION_MOBILE.SET_SUMMARY_PRICE:
            return {
                ...state,
                generallyValue: action.sumValue,
            }

        default:
            return state;
    }
}
export type setPrice = ReturnType<typeof setPrice>
export type setPriceWithS = ReturnType<typeof setPriceWithS>
export type ActionType = setPrice | setPriceWithS | setSummaryPrice
export const setPrice = (id: string, generallySum: number, value: number) => ({type: ACTION_OPTIONS.SET_PRICE, value, id, generallySum} as const)
export const setPriceWithS = ( generallySumPlus: number) => ({type: ACTION_OPTIONS.SET_PRICE_WITH_S, generallySumPlus} as const)
