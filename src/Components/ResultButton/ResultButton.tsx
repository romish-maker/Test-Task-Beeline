import React, {useState} from 'react';
import styles from './ResultButton.module.css';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade'
import {Button} from "@material-ui/core";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../state/store";


export const ResultButton = () => {
    const name = useSelector<AppRootStateType, string>(state => state.form.name)
    const phone = useSelector<AppRootStateType, string>(state => state.form.phone)
    const unicId = useSelector<AppRootStateType, string>(state => state.form.unicId)

    const value = useSelector<AppRootStateType, number>(state => state.option.value)
    const valueOfMobileInternet = useSelector<AppRootStateType, number>(state => state.internet.value)
    const generallyValue = useSelector<AppRootStateType, number>(state => state.option.generallyValue)
    const valueOfUnlimited = useSelector<AppRootStateType, number>(state => state.unlimited.value)




    const useStyles = makeStyles((theme: Theme) =>
        createStyles({
            modal: {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
            },
            paper: {
                backgroundColor: theme.palette.background.paper,
                border: '2px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3),
            },
        }),
    );
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div>
            <div className={styles.root}>
            <Button variant="contained" color="secondary" type="button" onClick={handleOpen}>
                Подключить
            </Button>
            </div>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                    <div className={classes.paper}>
                        <h2 id="transition-modal-title">Имя: {name} Телефон: {phone} ИИН: {unicId}</h2>
                        <p id="transition-modal-description">
                            Интернет: {value + 'тг'},
                            звонки: {valueOfMobileInternet + 'тг'},
                            безлимит: {valueOfUnlimited + 'тг'}
                        </p>
                        <p id="transition-modal-paragraph">Общая цена: {generallyValue + 'тг'}</p>
                    </div>
                </Fade>
            </Modal>
        </div>
    );
};
