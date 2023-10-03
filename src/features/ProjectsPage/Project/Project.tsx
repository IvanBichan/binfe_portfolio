import s from './Project.module.scss'
import {FC, memo, useState} from 'react';

type StyleType = {
    backgroundImage: string
    backgroundSize: string
}

type ProjectProps = {
    style: StyleType
    title: string
    description?: string
    demoLink: string
    codeLink: string
}

export const Project: FC<ProjectProps> = memo(({title, description, demoLink, style, codeLink}) => {
    const [isVisible, setIsVisible] = useState<boolean>(false)
    const onMouseEnterHandler = () => {
        setIsVisible(true)
    }
    const onMouseLeaveHandler = () => {
        setIsVisible(false)
    }
    return (
        <div className={s.projectContainer}
             onMouseEnter={onMouseEnterHandler}
             onMouseLeave={onMouseLeaveHandler}>
            <div className={s.portfolioProject} style={style}>
                <div className={s.projectPreview}>
                    <div className={s.content}>
                        <h4 className={s.projectTitle}> {title} </h4>
                        {/*<ButtonComponent title={title}/>*/}
                        {isVisible &&
                            <p className={s.projectDescription}> {description} </p>}
                        <div className={s.buttonLink}>
                            <a href={demoLink} className={s.linkDemo} target='_blank' rel='noreferrer'> DEMO </a>
                            <a href={codeLink} className={s.linkDemo} target='_blank' rel='noreferrer'> CODE </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
})