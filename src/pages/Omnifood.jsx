import HeroFood from '../features/Omnifood/HeroFood';
import Description from '../features/Omnifood/Description';
import Header from '../features/Omnifood/Header';
import Meals from '../features/Omnifood/Meals';
import Pricing from '../features/Omnifood/Pricing';
import Testimonials from '../features/Omnifood/Testimonials';
import FeaturedIn from '../features/Omnifood/FeaturedIn';
import CTA from '../features/Omnifood/CTA';
import Footer from '../features/Omnifood/Footer';

function Food() {
  return (
    <div className="font-rubik">
      <Header />
      <main>
        <HeroFood />
        <FeaturedIn />
        <Description />
        <Meals />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default Food;
