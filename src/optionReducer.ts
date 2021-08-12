enum ACTION_OPTIONS {

}


export type InitialStateType = {
    id: number,
    price: number,
    value: number,
    title: string,
}
export const initialState = {
    optionValue:
        [
            {id: 1, price: 2200, value: 10, title: 'гб'},
            {id: 2, price: 2500, value: 15, title: 'гб'},
            {id: 3, price: 3000, value: 30, title: 'гб'}
        ] as OptionValueType[],
    value: 0
}

export type OptionState = typeof initialState
export type OptionValueType = {
    id: number;
    price: number;
    value: number;
    title: string;
}


export const optionReducer = (state: OptionState = initialState, action: ActionType) => {
    switch (action.type) {
        case 'SET_PRICE':
            return {
                ...state,
                value: action.value
            }

        default:
            return state;
    }
}
export type setPrice = ReturnType<typeof setPrice>
export type ActionType = setPrice
export const setPrice = (value: number, id: number) => ({type: 'SET_PRICE', value, id} as const)