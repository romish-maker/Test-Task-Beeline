import React, {useState} from 'react';
import styles from './CardOption.module.css';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {OptionValueType, setPrice} from "./optionReducer";

export const CardOption = () => {
    const [active, setActive] = useState<string | number>('')
    const options = useSelector<AppRootStateType,OptionValueType[]>(state => state.option.optionValue)
    const value = useSelector<AppRootStateType, null | number>(state => state.option.value)
    const dispatch = useDispatch()

    const onClickHandler = (id: number,price:number) => {
        dispatch(setPrice(price,id))
        setActive(id)
    }
    console.log(options);
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
            <div>PRICE:{value}</div>
        </div>
    );
};

