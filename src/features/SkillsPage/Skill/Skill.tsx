import s from './Skill.module.scss';
import {FC, memo} from 'react';

type SkillProps = {
    logo: JSX.Element
    title: string
    description: string
}

export const Skill: FC<SkillProps> = memo(({logo, title, description}) => {
    return (
        <div className={s.skillContainer}>
            <div className={s.service}>
                <div className={s.iconContainer}>
                    {logo}
                </div>
                <div className={s.content}>
                    <h3> {title} </h3>
                    <p> {description} </p>
                </div>
            </div>

        </div>
    )
})