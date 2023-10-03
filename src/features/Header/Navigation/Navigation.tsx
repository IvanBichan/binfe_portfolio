import {FC} from 'react';
import s from './Navigation.module.scss'
import {Links} from "../../../common/components/Links/Links";

export const Navigation: FC = () => {
    return (
        <nav className={s.nav}>
            <Links className={s.active}/>
        </nav>
    )
}