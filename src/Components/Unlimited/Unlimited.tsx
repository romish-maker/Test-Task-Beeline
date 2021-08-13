import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {
    MobileUnlimitedValueType,
    setChange,
    setPriceForUnLimited,
    setSummaryPrice,
} from "../../state/Reducers/mobileUnlimitedReducer";
import styles from './Unlimit.module.css'
import {setPrice} from "../../state/Reducers/optionReducer";

export const Unlimited = () => {
    const unlimited = useSelector<AppRootStateType, MobileUnlimitedValueType[]>(state => state.unlimited.optionValue)
    const value = useSelector<AppRootStateType, number>(state => state.unlimited.value)

    const dispatch = useDispatch()

    const toggleChecked = (checked: boolean, id: string, price: number) => {
        // dispatch(setChange(checked, id));
        // dispatch(setPrice(price, id))
        if (!checked) {
            const generallyValue = value && value - price
            dispatch(setSummaryPrice(id, generallyValue))
        } else {
            const generallyValue = value && value + price
            dispatch(setSummaryPrice(id, generallyValue))
        }

    };
    return (
        <div className={styles.root}>
            {unlimited.map(unl => {
                return (
                    <FormGroup key={unl.id}>
                        <FormControlLabel
                            control={<Switch checked={unl.checked}
                                             onChange={(e) =>
                                                 toggleChecked(e.currentTarget.checked, unl.id, unl.price)}
                            />}

                            label={<img src={unl.src} alt=""/>}
                        />
                    </FormGroup>
                )
            })}
            <h1>PRICE: {value}</h1>
        </div>
    )
}

