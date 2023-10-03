import {FC, memo} from 'react';
import style from './Sidebar.module.scss'
import {IoCloseSharp} from '@react-icons/all-files/io5/IoCloseSharp';
import {Links} from "../../common/components/Links/Links";

type SidebarProps = {
    open: boolean
    handleClose: () => void
}
export const Sidebar: FC<SidebarProps> = memo(({open, handleClose}) => {
    const sidebarClass = style.sidebar + (open ? ' ' + style.open : '')
    return (
        <>
            {open && <div className={style.background} onClick={handleClose}/>}

            <aside className={sidebarClass}>
                <IoCloseSharp onClick={handleClose} className={style.closeIcon}/>
                <nav className={style.nav}>
                    <Links handleClose={handleClose} className={style.active}/>
                </nav>
            </aside>
        </>
    )
})