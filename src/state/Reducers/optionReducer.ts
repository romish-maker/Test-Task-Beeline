import {v1} from "uuid";

enum ACTION_OPTIONS {
    SET_PRICE = 'optionReducer/SET_PRICE'
}
export const initialOptionState = {
    optionValue:
        [
            {id: v1(), price: 2200, value: 10, title: 'гб'},
            {id: v1(), price: 2500, value: 15, title: 'гб'},
            {id: v1(), price: 3000, value: 30, title: 'гб'}
        ] as OptionValueType[],
    value: 0,
    generallyValue: 2200
}

export type OptionState = typeof initialOptionState
export type OptionValueType = {
    id: string;
    price: number;
    value: number;
    title: string;
    generallyValue: number
}


export const optionReducer = (state: OptionState = initialOptionState, action: ActionType) => {
    switch (action.type) {
        case ACTION_OPTIONS.SET_PRICE:
            return {
                ...state,
                value: action.value,
                generallyValue: action.generallySum
            }

        default:
            return state;
    }
}
export type setPrice = ReturnType<typeof setPrice>
export type ActionType = setPrice
export const setPrice = (value: number, id: string, generallySum: number) => ({type: ACTION_OPTIONS.SET_PRICE, value, id, generallySum} as const)