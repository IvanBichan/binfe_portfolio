import {FC} from 'react';
import s from './Title.module.scss';
import {Fade} from "react-awesome-reveal";

type TitleProps = {
    title: string,
    description: string
}
export const Title: FC<TitleProps> = ({title, description}) => {
    return (
        <div className={s.title}>
            <Fade cascade>
                <h2> {title} </h2>
                <p> {description} </p>
            </Fade>
        </div>
    )
}