import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {MobileUnlimitedValueType, setAllCheckbox,} from "../../state/Reducers/mobileUnlimitedReducer";
import styles from './Unlimit.module.css'
import {setPrice, setPriceWithS} from "../../state/Reducers/optionReducer";

export const Unlimited = () => {
    const unlimited = useSelector<AppRootStateType, MobileUnlimitedValueType[]>(state => state.unlimited.optionValue)
    const valueOfUnlimited = useSelector<AppRootStateType, number>(state => state.unlimited.value)
    const generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)

    const dispatch = useDispatch()

    let generallySum;
    const toggleChecked = (checked: boolean, id: string, price: number) => {
        if (checked) {
            generallySum = generallyValue + price
            dispatch(setPrice(price, id, generallySum))
        } else {
            generallySum = generallyValue - price
            dispatch(setPrice(price, id, generallySum))
        }
    };

    const onChangeHandlerForCheckbox = () => {
        dispatch(setAllCheckbox())
        if(!checked) {
            generallySum = generallyValue + 500
            dispatch(setPriceWithS(generallySum))
        } else {
            generallySum = generallyValue - 500
            dispatch(setPriceWithS(generallySum))
        }

    }

    const checked = !unlimited.find(unl => !unl.checked);

    return (
        <>
            <div className={styles.root}>
                <h3 style={{width: '250px', cursor: 'pointer'}}>Включить все безлимиты за 500 тг</h3>
                <Switch checked={checked} onChange={() => onChangeHandlerForCheckbox()} onClick={() => {}}/>
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
            </div>
        </>
    )
}

