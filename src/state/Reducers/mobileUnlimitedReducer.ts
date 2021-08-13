import {v1} from "uuid";
import socialInst from '../../assets/img/soc-inst.svg';
import socialTelg from '../../assets/img/soc-teleg.svg';
import socialWwp from '../../assets/img/soc-whatsup.svg';
import socialYt from '../../assets/img/soc-yt.svg';

enum ACTION_MOBILE {
    SET_PRICE_UNLIMITED = 'mobileUnlimited/SET_PRICE_UNLIMITED',
    SET_CHANGE = 'mobileUnlimited/SET_CHANGE',
    SET_SUMMARY_PRICE = 'mobileUnlimited/SET_SUMMARY_PRICE'
}


export const initialUnlimitedState = {
    optionValue:
        [
            {id: v1(), price: 400, src: socialInst},
            {id: v1(), price: 300, src: socialTelg},
            {id: v1(), price: 100, src: socialWwp},
            {id: v1(), price: 100, src: socialYt}
        ] as MobileUnlimitedValueType[],
    value: 400,
    checked: false
}

export type OptionStateForUnlimited = typeof initialUnlimitedState; // Типизация стейта

export type MobileUnlimitedValueType = {
    id: string
    price: number
    value: number
    checked: boolean
    src: string
}


export const mobileUnlimitedReducer = (state: OptionStateForUnlimited = initialUnlimitedState, action: ActionTypes) => {
    switch (action.type) {
        case ACTION_MOBILE.SET_PRICE_UNLIMITED:
            return {
                ...state,
                value: action.value
            }
            case ACTION_MOBILE.SET_SUMMARY_PRICE:
            return {
                ...state,
                value: action.sumValue
            }
        case ACTION_MOBILE.SET_CHANGE:
            return {
                ...state,
                checked: action.checked
            }

        default:
            return state;
    }
}
export type setPriceForUnLimited = ReturnType<typeof setPriceForUnLimited>
export type setChange = ReturnType<typeof setChange>
export type setSummaryPrice = ReturnType<typeof setSummaryPrice>

export type ActionTypes = setPriceForUnLimited | setChange | setSummaryPrice

export const setPriceForUnLimited = (value: number, id: string) => {
    return {
        type: ACTION_MOBILE.SET_PRICE_UNLIMITED,
        value,
        id
    } as const
}
export const setChange = (checked: boolean, id: string) => {
    return {
        type: ACTION_MOBILE.SET_CHANGE,
        id,
        checked
    } as const
}
export const setSummaryPrice = (id: string, sumValue: number, ) => {
    return {
        type: ACTION_MOBILE.SET_SUMMARY_PRICE,
        id,
        sumValue,
    } as const
}