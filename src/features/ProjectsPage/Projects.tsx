import {FC} from 'react';
import s from './Projects.module.scss'
import container from '../../common/styles/Container.module.scss';
import {Project} from './Project/Project';
import {Title} from '../../common/components/Title/Title';
import sn from '../../accets/image/SN.jpeg'
import todo from '../../accets/image/todo.jpeg'
import questions from '../../accets/image/question_1.jpeg'
import {createProjectStyle} from '../../common/utils/utils';
import {LINKS} from '../../common/constants/constants';


export const Projects: FC = () => {
    const socialStyle = createProjectStyle(sn)
    const todoStyle = createProjectStyle(todo)
    const cardsStyle = createProjectStyle(questions)

    const projects = [
        {
            title: 'Cards',
            demoLink: LINKS.PROJECT_LINKS.CARDS_DEMO,
            style: cardsStyle,
            codeLink: LINKS.PROJECT_LINKS.CARDS_CODE,
            description: 'Technology stack: react, redux-toolkit, react-redux, redux-thunk, react-router-dom, typescript, dayJS, MUI'
        },
        {
            title: 'Social network',
            demoLink: LINKS.PROJECT_LINKS.SOCIAL_NETWORK_DEMO,
            style: socialStyle,
            codeLink: LINKS.PROJECT_LINKS.SOCIAL_NETWORK_CODE,
            description: 'Technology stack: react, redux, react-redux, redux-thunk, typescript, react-router-dom, axios, redux-form, reselect, material UI'
        },
        {
            title: 'Todolist',
            demoLink: LINKS.PROJECT_LINKS.TODO_DEMO,
            style: todoStyle,
            codeLink: LINKS.PROJECT_LINKS.TODO_CODE,
            description: 'Technology stack: react, redux, react-redux, redux-thunk, react-router-dom, react-hook-form, typescript, dayjs, axios, react-bootstrap, react-icons'
        },

    ]
    return (
        <section className={s.projectsContainer} id='projectsPage'>
            <div className={`${container.container} ${s.projectsBlock}`}>
                <Title title='Projects' description=''/>
                <div className={s.projects}>
                    {
                        projects.map(elem => <Project title={elem.title}
                                                      style={elem.style}
                                                      demoLink={elem.demoLink}
                                                      codeLink={elem.codeLink}
                                                      description={elem.description}
                        />)
                    }
                </div>
            </div>
        </section>
    )
}