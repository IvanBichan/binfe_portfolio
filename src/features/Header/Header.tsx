import {FC} from 'react';
import s from './Header.module.scss'
import {Navigation} from './Navigation/Navigation';
import {ContactButtonGroup} from '../ContactButtonGroup/ContactButtonGroup';
import {GiHamburgerMenu} from '@react-icons/all-files/gi/GiHamburgerMenu';

type SidebarProps = {
    handleOpen: () => void
}
export const Header: FC<SidebarProps> = ({handleOpen}) => {

    return (
        <header className={s.header}>
            <div className={s.smallScreenNavigation}>
                <GiHamburgerMenu onClick={handleOpen} className={s.burger}/>
            </div>
            <div className={s.bigScreenNavigation}>
                <Navigation/>
            </div>


            <ContactButtonGroup/>
        </header>
    )
}