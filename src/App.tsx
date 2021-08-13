import React from 'react'
import {CardOption} from "./Components/CardOption/CardOption";
import {Form} from './Components/Form/Form';
import {MobileInternet} from "./Components/MobileInternet/MobileInternet";
import {ResultButton} from "./Components/ResultButton/ResultButton";
import {Unlimited} from "./Components/Unlimited/Unlimited";


export function App () {
    return (
        <div>
            <Form/>
            <CardOption/>
            <MobileInternet/>
            <Unlimited/>
            <ResultButton/>
        </div>
    );
}

