import styles from "./page.module.css";
import Header from './component/header/header';
import Main from './component/main/main';
import Category from './component/category/category';
import BestSeller from './component/bestSeller/bestSeller';
import Feedback from './component/feedback/feedback';
import Instagram from './component/instaStory/instagram';
import Footer from './component/footer/footer';
export default function Home() {
  return (
    <main>
      <Header />
      <Main />
      <Category/>
      <BestSeller/>
      <Feedback/>
      <Instagram />
      <Footer/>
    </main>
  );
}
