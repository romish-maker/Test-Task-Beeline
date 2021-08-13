import React, {useState} from 'react';
import styles from './CardOption.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {OptionValueType, setPrice} from "../../state/Reducers/optionReducer";
import {setSummaryPrice} from "../../state/Reducers/mobileUnlimitedReducer";

export const CardOption = () => {
    const [active, setActive] = useState<string | number>('')

    const options = useSelector<AppRootStateType,OptionValueType[]>(state => state.option.optionValue)
    const value = useSelector<AppRootStateType, number>(state => state.option.value)
    const generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)
    const valueOfMobileInternet = useSelector<AppRootStateType, number>(state => state.internet.value)

    console.log(value);
    const dispatch = useDispatch()

    const onClickHandler = (id: string, price:number) => {
        const summarySum = valueOfMobileInternet && valueOfMobileInternet + value
        dispatch(setSummaryPrice(id, summarySum))
        dispatch(setPrice(price,id, summarySum))
        setActive(id)
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
                                onClick={() => onClickHandler(option.id,option.price)}
                            >
                                <div>{option.value}</div>
                                <span>{option.title}</span>
                            </div>
                        </div>
                    </div>
                )
            })}
            {/*<div>PRICE:{value}</div>*/}
            {/*<h1>PRICEforInternet{valueOfMobileInternet}</h1>*/}
            <h1>{generallyValue}</h1>
        </div>
    );
};

