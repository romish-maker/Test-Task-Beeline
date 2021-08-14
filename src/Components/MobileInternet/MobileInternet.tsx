import styles from "../CardOption/CardOption.module.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {MobileValueType} from "../../state/Reducers/mobileInternetReducer";
import {setSummaryPrice} from "../../state/Reducers/mobileUnlimitedReducer";
import {setPrice} from "../../state/Reducers/optionReducer";


export const MobileInternet = () => {
    const [active, setActive] = useState<string | number>('')

    const internet = useSelector<AppRootStateType, MobileValueType[]>(state => state.internet.optionValue)

    const valueOfMobileInternet = useSelector<AppRootStateType, number>(state => state.internet.value)

    const valueOfCardOption = useSelector<AppRootStateType, number>(state => state.option.value)

    const generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)

    const generallyValueOfMobileInternet = useSelector<AppRootStateType, number>(state => state.internet.generallyValue)


    const dispatch = useDispatch()

    const onClickHandler = (id: string, price: number) => {
        if (generallyValue === valueOfCardOption ) {
            const generallySum = generallyValue + price
            dispatch(setSummaryPrice(id, generallySum))
            dispatch(setPrice(price, id, generallySum))
            setActive(id)
        } else if(generallyValue === price) {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPrice(price, id, price))
            setActive(id)
        }else if(valueOfCardOption === price) {
            dispatch(setSummaryPrice(id, price))
            setActive(id)
        } else if (valueOfCardOption === price) {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPrice(price, id, price))
        }else {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPrice(price, id, price))
            setActive(id)
        }

    }
    return (
        <div className={styles.header}>
            {internet.map((int: MobileValueType) => {
                const isActiveClassName = active === int.id ? styles.isSelected : styles.options
                return (
                    <div className={styles.wrapper} key={int.id}>
                        <div className={styles.container}>
                            <div
                                className={isActiveClassName}
                                onClick={() => onClickHandler(int.id, int.price)}
                            >
                                <div>{int.value}</div>
                                <span>{int.title}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>

    )
}
