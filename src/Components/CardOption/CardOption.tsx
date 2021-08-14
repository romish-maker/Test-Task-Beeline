import React, {useState} from 'react';
import styles from './CardOption.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {OptionValueType, setPrice} from "../../state/Reducers/optionReducer";
import {setSummaryPrice} from "../../state/Reducers/mobileUnlimitedReducer";

export const CardOption = () => {
    const [active, setActive] = useState<string | number>('')

    const options = useSelector<AppRootStateType, OptionValueType[]>(state => state.option.optionValue)
    const value = useSelector<AppRootStateType, number>(state => state.option.value)
    const generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)
    const valueOfMobileInternet = useSelector<AppRootStateType, number>(state => state.internet.value)
    const generallyValueOfMobileInternet = useSelector<AppRootStateType, number>(state => state.internet.generallyValue)
    const valueOfCardOption = useSelector<AppRootStateType, number>(state => state.option.value)

    const dispatch = useDispatch()

    const onClickHandler = (id: string, price: number) => {
        if (generallyValue === valueOfMobileInternet) {
            const generallySum = generallyValue + price
            dispatch(setSummaryPrice(id, generallySum))
            dispatch(setPrice(price, id, generallySum))
            setActive(id)
        } else if (generallyValue === price) {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPrice(price, id, price))
            setActive(id)
        } else if (price === valueOfCardOption) {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPrice(price, id, price))
            setActive(id)
        } else {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPrice(price, id, price))
            setActive(id)
        }
    }
    return (
        <div className={styles.header}>
            {options.map((option: OptionValueType) => {
                const isActiveClassName = active === option.id ? styles.isSelected : styles.options
                return (
                    <div className={styles.wrapper} key={option.id}>
                        <div className={styles.container}>
                            <div
                                className={isActiveClassName}
                                onClick={() => onClickHandler(option.id, option.price)}
                            >
                                <div>{option.value}</div>
                                <span>{option.title}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            <h1 className={styles.title}>{generallyValue}</h1>
        </div>
    );
}

