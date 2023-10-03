import {FC, memo} from 'react';
import s from './ButtonComponent.module.scss'
import {ButtonLoading} from "../ButtonLoading/ButtonLoading";

type ButtonComponentProps = {
    title: string
    onClick?: () => void
    type?: 'button' | 'submit' | 'reset' | undefined
    disabled?: boolean
}

export const ButtonComponent: FC<ButtonComponentProps> = memo(({
                                                                   title,
                                                                   onClick,
                                                                   type,
                                                                   disabled
                                                               }) => {
    return (
        <>
            {
                disabled
                    ? <ButtonLoading/>
                    : <button className={s.button}
                              type={type}
                              disabled={disabled}
                              onClick={onClick}
                    >
                        {title}
                    </button>
            }

        </>

    )
})