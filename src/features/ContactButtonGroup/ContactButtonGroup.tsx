import React from "react";
import s from './ContactButtonGroup.module.scss'

import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";
import {AiOutlineMail} from "@react-icons/all-files/ai/AiOutlineMail";
import {AiFillGithub} from "@react-icons/all-files/ai/AiFillGithub";
import {FaTelegramPlane} from "@react-icons/all-files/fa/FaTelegramPlane";
import {NavLink} from "react-router-dom";
import {LINKS, PATH} from "../../common/constants/constants";
import {SiCodewars} from "@react-icons/all-files/si/SiCodewars";


export const ContactButtonGroup = () => {
    return (
        <div className={s.iconsContainer}>

            <a href={LINKS.LINKED_IN} target='_blank' rel='noreferrer'>
                <AiFillLinkedin className={s.icon}/>
            </a>

            <NavLink to={PATH.CONTACT}>
                <AiOutlineMail className={s.icon}/>
            </NavLink>


            <a href={LINKS.GITHUB} target='_blank' rel='noreferrer'>
                <AiFillGithub className={s.icon}/>
            </a>

            <a href={LINKS.TELEGRAM} target='_blank' rel='noreferrer'>
                <FaTelegramPlane className={s.icon}/>
            </a>
            <a href={LINKS.CODEWARS} target='_blank' rel='noreferrer'>
                <SiCodewars className={s.icon}/>
            </a>

        </div>
    )
}