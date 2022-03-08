import React, {useContext} from "react";
import {AppContext} from "../../context/app.context";

export default function Menu(): JSX.Element {
    const { menu, setMenu, firstCategory } = useContext(AppContext);
    return (
       <div>
           <ul>
               {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
           </ul>
       </div>
        )
};