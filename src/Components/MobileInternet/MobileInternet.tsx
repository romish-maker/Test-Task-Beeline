import styles from "../CardOption/CardOption.module.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {MobileValueType, setPriceForMobile} from "../../state/Reducers/mobileInternetReducer";
import {setSummaryPrice} from "../../state/Reducers/mobileUnlimitedReducer";
import {setPrice} from "../../state/Reducers/optionReducer";


export const MobileInternet = () => {
    const [active, setActive] = useState<string | number>('')

    const internet = useSelector<AppRootStateType, MobileValueType[]>(state => state.internet.optionValue)

    const value = useSelector<AppRootStateType, number>(state => state.internet.value)
    const valueOfCardOption = useSelector<AppRootStateType, number>(state => state.option.value)
    const generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)


    const dispatch = useDispatch()

    const onClickHandler = (id: string, price: number) => {
        const generallySum = valueOfCardOption + price
        dispatch(setSummaryPrice(id, generallySum))
        dispatch(setPrice(price, id, generallySum))
        setActive(id)
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
