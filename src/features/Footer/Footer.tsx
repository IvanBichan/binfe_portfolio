import React from "react";
import s from './Footer.module.scss'
import {ContactButtonGroup} from "../ContactButtonGroup/ContactButtonGroup";

export const Footer = () => {
    return (
        <footer className={s.footer}>
            <ContactButtonGroup/>
        </footer>
    )
}