import Booking from '../features/Natours/Booking';
import Features from '../features/Natours/Features';
import Header from '../features/Natours/Header';
import PopularTours from '../features/Natours/PopularTours';
import Stories from '../features/Natours/Stories';
import Tours from '../features/Natours/Tours';

function NaTours() {
  return (
    <div className="font-lato text-gray-800 text-left p-8">
      <Header />
      <Tours />
      <Features />
      <PopularTours />
      <Stories />
      <Booking />
    </div>
  );
}

export default NaTours;
