import s from './Button.module.scss';
import {ButtonPropsTypes} from "./types";
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ appearance, arrow = 'none', children, className, ...props }: ButtonPropsTypes): JSX.Element => {

    return (
        <button className={cn(s.button, className, {
            [s.primary]: appearance === 'primary',
            [s.ghost]: appearance === 'ghost',
        })}
                {...props}
        >
            {children}
            {arrow !== 'none' && <span className={cn(s.arrow, {
                [s.down]: arrow === 'down',
            })}> <ArrowIcon /> </span>}
        </button>
    );

};