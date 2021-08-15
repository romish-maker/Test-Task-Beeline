import styles from "./Form.module.css";
import MaskedInput from "react-maskedinput";
import React, {ChangeEvent} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
    handleChangeFormForName,
    handleChangeFormForPhone,
    handleChangeFormForUnicId
} from "../../state/Reducers/formReducer";

export const Form = () => {
    const name = useSelector<AppRootStateType, string>(state => state.form.name)
    const phone = useSelector<AppRootStateType, string>(state => state.form.phone)
    const unicId = useSelector<AppRootStateType, string>(state => state.form.unicId)

    const dispatch = useDispatch()

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(handleChangeFormForPhone(e.currentTarget.value));
    }
    const onChangeHandlerForId = (e: ChangeEvent<HTMLInputElement>) => dispatch(handleChangeFormForUnicId(e.currentTarget.value))
    const onChangeHandlerForName = (e: ChangeEvent<HTMLInputElement>) => dispatch(handleChangeFormForName(e.currentTarget.value))

    return <div className={styles.wrapper}>
        <form className={styles.formGroup}>
            <input
                className={styles.input}
                placeholder="Введите ФИО"
                value={name}
                onChange={onChangeHandlerForName}
            />
            <MaskedInput
                mask="111111111111"
                name={'unicId'}
                className={styles.input}
                placeholder="Введите ИИН"
                value={unicId}
                onChange={onChangeHandlerForId}
            />
            <MaskedInput
                mask="+7 (111) 111-11-11"
                type={'text'}
                name="phone"
                className={styles.input}
                placeholder="Введите номер телефона"
                onChange={onChangeHandler}
                value={phone}
            />
        </form>
    </div>
}