import {FC} from "react";
import {NavLink} from "react-router-dom";
import {PATH} from "../../constants/constants";

type LinksPropsType = {
    handleClose?: () => void
    className: string
}

export const Links: FC<LinksPropsType> = ({handleClose, className}) => {
    return (
        <>
            <NavLink to={PATH.MAIN}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Home
            </NavLink>
            <NavLink to={PATH.SKILLS}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Skills
            </NavLink>
            <NavLink to={PATH.PROJECTS}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Projects
            </NavLink>
            <NavLink to={PATH.CONTACT}
                     className={({isActive}) => isActive ? className : ''}
                     onClick={handleClose}>
                Contact
            </NavLink>
        </>
    )
}