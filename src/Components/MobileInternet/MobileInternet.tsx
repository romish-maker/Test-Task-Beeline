import styles from "../CardOption/CardOption.module.css";
import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {MobileValueType, setPriceForMobile} from "../../state/Reducers/mobileInternetReducer";
import {setSummaryPrice} from "../../state/Reducers/mobileUnlimitedReducer";


export const MobileInternet = () => {
    const [active, setActive] = useState<string | number>('')

    const internet = useSelector<AppRootStateType, MobileValueType[]>(state => state.internet.optionValue)
    const valueOfCardOption = useSelector<AppRootStateType, number>(state => state.option.value)
    let generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)



    const dispatch = useDispatch()

    const onClickHandler = (id: string, price: number) => {
        debugger;
        if (generallyValue === valueOfCardOption ) {
            generallyValue = valueOfCardOption + price
            dispatch(setSummaryPrice(id, generallyValue))
            dispatch(setPriceForMobile(price, id, generallyValue))
            setActive(id)
        } else if(generallyValue === price) {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPriceForMobile(price, id, price))
            setActive(id)
        } else if(valueOfCardOption === price) {
            dispatch(setSummaryPrice(id, price))
            dispatch(setPriceForMobile(price, id, price))
            setActive(id)
        } else if(price){
            generallyValue = valueOfCardOption +     price
            dispatch(setSummaryPrice(id, generallyValue))
            dispatch(setPriceForMobile(price, id, generallyValue))
            setActive(id)
        } else {
            dispatch(setSummaryPrice(id, generallyValue))
            dispatch(setPriceForMobile(price, id, price))
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
