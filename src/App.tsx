import React, {ChangeEvent, useState} from 'react'
import styles from './App.module.css';
import MaskedInput from 'react-maskedinput'
import {CardOption} from "./CardOption";


export function App () {

    const [name, setName] = useState<string>('');
    const [phone, setPhone] = useState<string>('');
    const [unicId, setUnicId] = useState<string>('');

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => setPhone(e.currentTarget.value)
    const onChangeHandlerForId = (e: ChangeEvent<HTMLInputElement>) => setUnicId(e.currentTarget.value)
    const onChangeHandlerForName = (e: ChangeEvent<HTMLInputElement>) => setName(e.currentTarget.value)

    return (
      <div className={styles.wrapper}>
        <form className={styles.formGroup}>
          <input
              className={styles.input}
              placeholder="Введите ФИО"
              value={name}
              onChange={onChangeHandlerForName}
          />
          <MaskedInput
              mask="111111111111"
              name={'unicId'}
              className={styles.input}
              placeholder="Введите ИИН"
              value={unicId}
              onChange={onChangeHandlerForId}
          />
          <MaskedInput
              mask="+7 (111) 111-11-11"
              type={'text'}
              name="phone"
              className={styles.input}
              placeholder="Введите номер телефона"
              onChange={onChangeHandler}
              value={phone}
          />
        </form>
        <h1>{phone}</h1>
        <h2>{unicId}</h2>
        <h3>{name}</h3>

          <CardOption />
      </div>
  );
}

