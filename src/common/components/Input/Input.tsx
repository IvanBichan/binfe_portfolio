import {ChangeEvent, FC} from 'react';

type InputPropsType = {
    label: string | false | undefined
    placeholder?: string
    type?: string
    id?: string
    name?: string
    value: string | number
    onChange: (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>) => void
    className?: string
    component: 'input' | 'textarea'
}
export const Input: FC<InputPropsType> = ({
                                              label,
                                              name,
                                              id,
                                              value,
                                              type,
                                              onChange,
                                              placeholder,
                                              className,
                                              component
                                          }) => {
    return (
        <>
            <label style={{color: '#f9004d'}}> {label} </label>
            {
                component === 'input'
                    ? <input className={className}
                             placeholder={placeholder}
                             type={type}
                             id={id}
                             name={name}
                             value={value}
                             onChange={onChange}
                    />
                    : <textarea className={className}
                                placeholder={placeholder}
                                id={id}
                                name={name}
                                value={value}
                                onChange={onChange}
                    />
            }
        </>
    )
}