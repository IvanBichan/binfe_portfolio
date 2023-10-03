import s from './Contact.module.scss'
import container from '../../common/styles/Container.module.scss';
import {FC} from 'react';
import {Title} from '../../common/components/Title/Title';
import {ContactForm} from "./ContactForm/ContactForm";
import {ABOUT} from "../../common/constants/constants";


export const Contact: FC = () => {
    return (
        <section className={s.contactContainer} id='contactPage'>
            <div className={`${container.container} ${s.containerFormAndData}`}>
                <Title title='contact'
                       description={`I am available for freelance work. Connect with me via phone: ${ABOUT.PHONE} or email: ${ABOUT.EMAIL}`}/>
                <ContactForm/>
            </div>
        </section>
    )
}