import Image from 'next/image';
import styles from '../styles/Home.module.css';
import {Htag} from "../components/Htag/Htag";

export default function Home(): JSX.Element {
  return (
    <div>
      <Htag tag="h1">Text</Htag>
    </div>
  );
}
