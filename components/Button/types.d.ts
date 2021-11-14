import {ReactNode} from "react";

export interface ButtonPropsTypes {
    children: ReactNode;
    appearance: 'primary' | 'ghost';
}