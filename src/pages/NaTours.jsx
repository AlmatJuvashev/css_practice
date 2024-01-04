import Booking from "../features/Natours/Booking";
import Features from "../features/Natours/Features";
import Footer from "../features/Natours/Footer";
import Header from "../features/Natours/Header";
import Navigation from "../features/Natours/Navigation";
import PopularTours from "../features/Natours/PopularTours";
import Stories from "../features/Natours/Stories";
import Tours from "../features/Natours/Tours";

function NaTours() {
  return (
    <div className="font-lato text-gray-800 text-left p-8">
      <Navigation />
      <Header />
      <Tours />
      <Features />
      <PopularTours />
      <Stories />
      <Booking />
      <Footer />
    </div>
  );
}

export default NaTours;
