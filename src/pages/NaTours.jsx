import Features from '../features/Natours/Features';
import Header from '../features/Natours/Header';
import Tours from '../features/Natours/Tours';

function NaTours() {
  return (
    <div className="font-lato text-gray-800 text-left p-8">
      <Header />
      <Tours />
      <Features />
    </div>
  );
}

export default NaTours;
