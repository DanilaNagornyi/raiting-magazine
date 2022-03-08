import {withLayout} from "../../layout";
import {GetStaticPaths, GetStaticProps, GetStaticPropsContext} from "next";
import axios from 'axios';
import {MenuItemTypes} from "../../interfaces/menu.interface";
import {TopPageModelTypes} from "../../interfaces/page.interface";
import {ParsedUrlQuery} from "querystring";
import {ProductModelTypes} from "../../interfaces/product.interfac";


interface CoursePropsTypes extends Record<string, unknown>{
    menu: MenuItemTypes[],
    firstCategory: number;
    page: TopPageModelTypes;
    products: ProductModelTypes[];
}
const firstCategory = 0;

function CoursePage({menu, firstCategory, page, products}: CoursePropsTypes): JSX.Element {

    return (
        <>
            {products.length}
        </>
    )
}

export default withLayout(CoursePage);

export const getStaticPaths: GetStaticPaths = async () => {
    const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        paths: menu.flatMap(m => m.pages.map(p => '/courses/' + p.alias)),
        fallback: true,
    }
}

export const getStaticProps: GetStaticProps<CoursePropsTypes> = async ({ params }: GetStaticPropsContext<ParsedUrlQuery>) => {

    if (!params) {
        return  {
            notFound: true
        }
    }

    try {

    const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    })
    const { data: page } = await axios.get<TopPageModelTypes>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/byAlias' + params.alias);
    const { data: products } = await axios.post<ProductModelTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/product/find', {
        category: page.category,
        limit: 10,
    });
    return {
        props: {
            menu,
            firstCategory,
            page,
            products,
        }
    }
    } catch  {
        return {
            notFound: true
        }
    }
}

