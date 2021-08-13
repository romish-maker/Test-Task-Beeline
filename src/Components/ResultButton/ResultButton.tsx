import React from 'react';
import styles from './ResultButton.module.css';
import Button from '@material-ui/core/Button';


export const ResultButton = () => {
    return (
        <div className={styles.root}>
            <Button
                variant="outlined"
                color="secondary"
            >
                Подключить
            </Button>
        </div>
    );
};
