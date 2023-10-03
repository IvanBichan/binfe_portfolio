import s from './Skills.module.scss'
import container from '../../common/styles/Container.module.scss'

import {Skill} from './Skill/Skill';
import {Title} from '../../common/components/Title/Title';

import {FaReact} from '@react-icons/all-files/fa/FaReact';
import {SiRedux} from '@react-icons/all-files/si/SiRedux';
import {DiJavascript1} from '@react-icons/all-files/di/DiJavascript1';
import {DiCss3} from '@react-icons/all-files/di/DiCss3';
import {AiFillHtml5} from '@react-icons/all-files/ai/AiFillHtml5';
import {FaGitAlt} from '@react-icons/all-files/fa/FaGitAlt';
import {VscDebugConsole} from '@react-icons/all-files/vsc/VscDebugConsole';
import {CgStyle} from '@react-icons/all-files/cg/CgStyle';
import {AiOutlineCloudServer} from '@react-icons/all-files/ai/AiOutlineCloudServer';

type SkillsType = {
    logo: JSX.Element
    title: string
    description: string
}
export const Skills = () => {
    const skills: SkillsType[] = [
        {
            logo: <AiFillHtml5/>,
            title: 'HTML',
            description: 'Fundamentals HTML tags, form and validation, semantic HTML'
        },
        {
            logo: <DiCss3/>,
            title: 'CSS',
            description: 'Positioning, box modal, selectors, flexbox, media queries, transformation & animation'
        },
        {
            logo: <DiJavascript1/>,
            title: 'JavaScript/TypeScript',
            description: 'Data types, basic syntax, functions, promises, scope, event loop, async/await'
        },
        {
            logo: <FaReact/>,
            title: 'React',
            description: 'Class and functional components, state & props, components life-cycle, routing, conditional rendering, HOC'
        },
        {
            logo: <SiRedux/>,
            title: `Redux, Redux Toolkit, RTK Query`,
            description: 'Actions & thunks, reducer, context API, store, flux'
        },
        {
            logo: <AiOutlineCloudServer/>,
            title: 'REST API',
            description: 'HTTPS requests, URI parameters, Query parameters, status codes, axios library'
        },
        {
            logo: <FaGitAlt/>,
            title: 'Version Control and Git',
            description: 'Creating new repositories, push- and pull-requets, merge, repos cloning'
        },
        {
            logo: <VscDebugConsole/>,
            title: 'Testing and Debugging',
            description: 'TDD, Story book, Unit tests, Snapshot'
        },
        {logo: <CgStyle/>, title: 'Styling', description: 'Material UI, Chakra UI, React Bootstrap'}

    ]
    return (
        <section className={s.skillsContainer} id={'skillsPage'}>
            <div className={`${container.container} ${s.skillBlock}`}>
                <Title title='Skills' description=''/>

                <div className={s.skills}>
                    {skills.map(elem => <Skill logo={elem.logo}
                                               title={elem.title}
                                               description={elem.description}/>)}
                </div>

            </div>
        </section>
    )
}