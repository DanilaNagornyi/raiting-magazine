import React from "react";
import {FooterPropsTypes} from "./types";
import cn from "classnames";
import s from "./Footer.module.scss";

export default function Footer({...props}: FooterPropsTypes): JSX.Element {
    return (
       <div {...props}>
           Footer
       </div>
        )
};