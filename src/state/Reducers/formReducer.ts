enum ACTION_FORM {
    SET_CHANGE_FOR_NAME = 'formReducer/SET_CHANGE_FOR_NAME',
    SET_CHANGE_FOR_PHONE = 'formReducer/SET_CHANGE_FOR_PHONE',
    SET_CHANGE_FOR_UNICID = 'formReducer/SET_CHANGE_FOR_UNICID',
}

const initialState: InitialStateType = {
    name: "",
    phone: "",
    unicId: ""
}
type InitialStateType = {
    name: string
    phone: string
    unicId: string
}


export const formReducer = (state: InitialStateType = initialState, action: ActionTypes) => {
    switch (action.type) {
        case ACTION_FORM.SET_CHANGE_FOR_NAME:
            return {
                ...state,
                name: action.name
            }  
            case ACTION_FORM.SET_CHANGE_FOR_PHONE:
            return {
                ...state,
                phone: action.phone
            }  
            case ACTION_FORM.SET_CHANGE_FOR_UNICID:
            return {
                ...state,
                unicId: action.unicId
            }
        default:
            return state
    }
}

export type ActionTypes = handleChangeFormNameActionType | handleChangeFormPhoneActionType | handleChangeFormUnicIdActionType

type handleChangeFormNameActionType = ReturnType<typeof handleChangeFormForName>
type handleChangeFormPhoneActionType = ReturnType<typeof handleChangeFormForPhone>
type handleChangeFormUnicIdActionType = ReturnType<typeof handleChangeFormForUnicId>

export const handleChangeFormForName = (name: string) => {
    return {
        type: ACTION_FORM.SET_CHANGE_FOR_NAME,
        name
    } as const
}
export const handleChangeFormForPhone = (phone: string) => {
    return {
        type: ACTION_FORM.SET_CHANGE_FOR_PHONE,
        phone
    } as const
}
export const handleChangeFormForUnicId = (unicId: string) => {
    return {
        type: ACTION_FORM.SET_CHANGE_FOR_UNICID,
        unicId
    } as const
}