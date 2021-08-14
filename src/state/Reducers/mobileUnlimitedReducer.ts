import {v1} from "uuid";
import socialInst from '../../assets/img/soc-inst.svg';
import socialTelg from '../../assets/img/soc-teleg.svg';
import socialWwp from '../../assets/img/soc-whatsup.svg';
import socialYt from '../../assets/img/soc-yt.svg';
import {ACTION_OPTIONS, setPrice} from "./optionReducer";

enum ACTION_MOBILE {
    SET_SUMMARY_PRICE = 'mobileUnlimited/SET_SUMMARY_PRICE',
    SET_CHECKBOX = 'mobileUnlimited/SET_CHECKBOX',
}


export const initialUnlimitedState = {
    optionValue:
        [
            {id: v1(), price: 400, src: socialInst, checked: false},
            {id: v1(), price: 300, src: socialTelg, checked: false},
            {id: v1(), price: 100, src: socialWwp, checked: false},
            {id: v1(), price: 100, src: socialYt, checked: false}
        ] as MobileUnlimitedValueType[],
    value: 0,
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
        case ACTION_MOBILE.SET_SUMMARY_PRICE:
            return {
                ...state,
                value: action.sumValue
            }
            case ACTION_OPTIONS.SET_PRICE:
                return {
                    ...state,
                    optionValue: state.optionValue.map(v => {
                        if (v.id === action.id) {
                            return {...v, checked: !v.checked}
                        } else {
                            return v
                        }
                    }),
                }
                case ACTION_MOBILE.SET_CHECKBOX:
                return {
                    ...state,
                    optionValue: state.optionValue.map(v => {
                        return {...v, checked: !v.checked}
                    })
                }
        default:
            return state;
    }
}
export type setSummaryPrice = ReturnType<typeof setSummaryPrice>
export type setCheckbox = ReturnType<typeof setAllCheckbox>

export type ActionTypes = setSummaryPrice | setPrice | setCheckbox

export const setSummaryPrice = (id: string, sumValue: number,) => {
    return {
        type: ACTION_MOBILE.SET_SUMMARY_PRICE,
        id,
        sumValue,
    } as const
}
export const setAllCheckbox = () => {
    return {
        type: ACTION_MOBILE.SET_CHECKBOX,
    } as const
}


// return {...v, checked: !v.checked}