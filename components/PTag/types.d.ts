import React, {DetailedHTMLProps, HTMLAttributes, ReactNode} from "react";

export interface PTagPropsTypes extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement>{
    size?: 'small' | 'medium' | 'large';
    children: ReactNode;
}