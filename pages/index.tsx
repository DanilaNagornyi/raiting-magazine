import {Htag} from "../components/Htag/Htag";
import {Button} from "../components/Button/Button";
import PTag from "../components/PTag";
import Tag from "../components/Tag";
import Rating from "../components/Rating";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
          <Button appearance='primary' arrow='right'>Hello</Button>
        <Button appearance='ghost' arrow='right'>Hello People yoyo</Button>
        <PTag size="medium">Test props in p</PTag>
        <Tag color="primary" size='small'>Primary</Tag>
        <Tag color="green" size='medium'>Green</Tag>
        <Rating rating={4} />
    </>
  )
}
