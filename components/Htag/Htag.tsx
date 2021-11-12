import {HtagPropsTypes} from "./Htag.types";

export const Htag = ({ tag, children }: HtagPropsTypes): JSX.Element => {
    return (<h1>{children}</h1>)
}