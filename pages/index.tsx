import {Htag} from "../components/Htag/Htag";
import {Button} from "../components/Button/Button";
import PTag from "../components/PTag";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import {useState} from "react";
import {withLayout} from "../layout";
import {GetStaticProps} from "next";
import axios from 'axios';
import {MenuItemTypes} from "../interfaces/menu.interface";

interface HomePropsTypes extends Record<string, unknown>{
    menu: MenuItemTypes[],
    firstCategory: number;
}

function Home({menu, firstCategory}: HomePropsTypes): JSX.Element {
    const [rating, setRating] = useState<number>(3);

  return (
    <>
      <Htag tag="h1">Text</Htag>
          <Button appearance='primary' arrow='right'>Hello</Button>
        <Button appearance='ghost' arrow='right'>Hello People yoyo</Button>
        <PTag size="medium">Test props in p</PTag>
        <Tag color="primary" size='small'>Primary</Tag>
        <Tag color="green" size='medium'>Green</Tag>
        <Rating rating={rating} isEditable setRating={setRating} />
        <ul>
            {menu.map(el => (<li key={el._id.secondCategory}>{el._id.secondCategory}</li>))}
        </ul>
    </>
  )
}

export default withLayout(Home)

export const getStaticProps: GetStaticProps<HomePropsTypes> = async () => {
    const firstCategory = 0;
    const { data: menu } = await axios.post<MenuItemTypes[]>(process.env.NEXT_PUBLIC_DOMAIN + '/api/top-page/find', {
        firstCategory
    });
    return {
        props: {
            menu,
            firstCategory
        }
    }
}

