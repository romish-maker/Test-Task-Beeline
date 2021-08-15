import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";
import {MobileUnlimitedValueType, setAllCheckbox, setSummaryPrice} from "../../state/Reducers/mobileUnlimitedReducer";
import styles from './Unlimit.module.css'
import {setPrice, setPriceWithS} from "../../state/Reducers/cardOptionReducer";

export const Unlimited = () => {
    const unlimited = useSelector<AppRootStateType, MobileUnlimitedValueType[]>(state => state.unlimited.optionValue)
    let generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)

    const dispatch = useDispatch()


    let generallySum;
    const toggleChecked = (checked: boolean, id: string, price: number) => {
        if (checked) {
            generallyValue = generallyValue + price
            dispatch(setPrice(id, generallyValue, price))
            dispatch(setSummaryPrice(id, generallyValue))
        } else {
            generallyValue = generallyValue - price
            dispatch(setPrice(id, generallyValue, generallyValue))
            dispatch(setSummaryPrice(id, generallyValue))
        }
    };

    const onChangeHandlerForCheckbox = () => {
        debugger;
        dispatch(setAllCheckbox())
        if (!checked) {
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
                <Switch checked={checked} onChange={() => onChangeHandlerForCheckbox()} onClick={() => {
                }}/>
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

