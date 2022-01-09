import React from "react";
import {SideBarPropsTypes} from "./types";
import cn from "classnames";
import s from "./SideBar.module.scss";

export default function SideBar({...props}: SideBarPropsTypes): JSX.Element {
    return (
       <div {...props}>
           SideBar
       </div>
        )
};