import { CardList } from "./components/CardList";
import { CategoryList } from "./components/CategoryList";
import { Featured } from "./components/Featured";
import { Footer } from "./components/Footer";
import { Menu } from "./components/Menu";
import { Navbar } from "./components/Navbar";
import styles from "./homepage.module.css";

export default function Home() {
  return <div className="">
    <Featured/>
    <CategoryList/>
    <div>
      <CardList/>
      <Menu/>
    </div>
  </div>;
}
