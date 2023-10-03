import {FC} from 'react';
import s from './ContactForm.module.scss';
import {Input} from '../../../common/components/Input/Input';
import {ButtonComponent} from '../../../common/components/Button/ButtonComponent';
import {SnackBar} from '../../../common/components/SnackBar/SnackBar';
import {useContactForm} from './hooks/useContactForm';

export const ContactForm:FC = () => {
    const {formik, onDisabled, snackbarShow, snackbarType, snackbarMessage} = useContactForm()
    return (
        <>
            <form  className={s.form} onSubmit={formik.handleSubmit}>
                <Input label={formik.touched.name && formik.errors.name}
                       placeholder='Your name'
                       type='text'
                       id='name'
                       name='name'
                       component='input'
                       value={formik.values.name}
                       onChange={formik.handleChange}
                       className={s.input}
                />
                <Input label={formik.touched.email && formik.errors.email}
                       placeholder='Your email'
                       type='text'
                       id='email'
                       name='email'
                       component='input'
                       value={formik.values.email}
                       onChange={formik.handleChange}
                       className={s.input}
                />
                <Input label={formik.touched.message && formik.errors.message}
                       placeholder='Your message'
                       id='message'
                       name='message'
                       component='textarea'
                       value={formik.values.message}
                       onChange={formik.handleChange}
                       className={s.input}
                />
                <ButtonComponent title='send message' type='submit' disabled={onDisabled}/>
            </form>
            <SnackBar show={snackbarShow} type={snackbarType} message={snackbarMessage}/></>
    )
}