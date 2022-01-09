import s from './Button.module.scss'
import {ButtonPropsTypes} from "./types";
import cn from 'classnames';

export const Button = ({ appearance, children, className, ...props }: ButtonPropsTypes): JSX.Element => {

    return (
        <button className={cn(s.button, {
            [s.primary]: appearance === 'primary',
            [s.ghost]: appearance === 'ghost',
        })}
                {...props}
        >
            {children}
        </button>
    )

}