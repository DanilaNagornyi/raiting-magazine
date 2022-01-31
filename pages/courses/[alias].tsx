import {useState} from "react";
import {withLayout} from "../../layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItemTypes} from "../../interfaces/menu.interface";


interface CoursePropsTypes extends Record<string, unknown>{
    menu: MenuItemTypes[],
    firstCategory: number;
}

function CoursePage({menu, firstCategory}: CoursePropsTypes): JSX.Element {

    return (
        <>

        </>
    )
}

export default withLayout(CoursePage)

export const getStaticProps: GetStaticProps<CoursePropsTypes> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    const { data: page } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

