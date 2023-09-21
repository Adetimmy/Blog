import { CardList } from "../components/CardList";
import { CategoryList } from "../components/CategoryList";
import { Featured } from "../components/Featured";
import { Footer } from "../components/Footer";
import { Menu } from "../components/Menu";
import { Navbar } from "../components/Navbar";
import styles from "./homepage.module.css";
import {useSearchParams } from 'next/navigation'




export default function Home() {

  return <div className="">
    <Featured/>
    <CategoryList/>
    <div className="flex gap-[50px]">
      <CardList/>
      <Menu/>
    </div>
  </div>;
}
