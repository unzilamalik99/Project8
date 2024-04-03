import "./App.css";
import AppNavigator from "./Components/AppNavigator";
import FAQ from "./Components/FAQ";
import Card from "./Components/Card"
import Card2 from "./Components/Card2"
import ImageCards from './Components/ImageCards';
import TextImageCards from './Components/TextImgcard';
import VideoCard from './/Components/VideoCard'
import CardBoxes from './/Components/CardBoxes'
import VideoSlider from "./Components/VideoSlider";
import PricingCards from "./Components/PricingCards";
import Footer from "./Components/Footer";

const images = [
  'https://picsum.photos/id/1018/400/300',
  'https://picsum.photos/id/1015/400/300',
  'https://picsum.photos/id/1019/400/300',
  'https://picsum.photos/id/1020/400/300',
  'https://picsum.photos/id/1021/400/300',
  'https://picsum.photos/id/1022/400/300',
  'https://picsum.photos/id/1023/400/300',
  'https://picsum.photos/id/1024/400/300',
  'https://picsum.photos/id/1025/400/300',
];

export default function App() {


  return (
    <div>
      <AppNavigator />
      <VideoSlider />
      <Card />
      <div className="p-8">
      <ImageCards images={images} />
      <TextImageCards />
      <VideoCard />
      <CardBoxes />
      <Card2 />
      <PricingCards />
      <FAQ />
    </div>
      <Footer />
    </div>
  );
}
