import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Htag} from "../components/Htag/Htag";
import {Button} from "../components";

export default function Home(): JSX.Element {
  return (
    <>
      <Htag tag="h1">Text</Htag>
        <Button appearance='primary'>Hello</Button>
        <Button appearance='ghost'>Hello People yoyo</Button>
    </>
  )
}
