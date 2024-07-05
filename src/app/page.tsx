import Main from './component/main/main';
import Category from './component/category/category';
import BestSeller from './component/bestSeller/bestSeller';
import Feedback from './component/feedback/feedback';
import Instagram from './component/instaStory/instagram';
import Support from './component/support/support';

export default function Home() {
  return (
    <main>
      <Main />
      <Category/>
      <BestSeller/>
      <Feedback/>
      <Instagram />
      <Support />
    </main>
  );
}
