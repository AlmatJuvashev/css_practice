import './App.css';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Accordion from './pages/Accordion';
import Carousel from './pages/Carousel';
import Table from './pages/Table';
import Hero from './pages/Hero';
import AppLayout from './pages/AppLayout';
import Omnifood from './pages/Omnifood';
import NaTours from './pages/NaTours';
import { OmnifoodProvider } from './context/OmnifoodProvider';
import { NatourProvider } from './context/NatoursProvider';

function App() {
  return (
    <>
      <NatourProvider>
        <OmnifoodProvider>
          <BrowserRouter>
            <Routes>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />
              <Route path="accordion" element={<Accordion />} />
              <Route path="carousel" element={<Carousel />} />
              <Route path="table" element={<Table />} />
              <Route path="hero" element={<Hero />} />
              <Route path="layout" element={<AppLayout />} />
              <Route path="food" element={<Omnifood />} />
              <Route path="tours" element={<NaTours />} />
            </Routes>
          </BrowserRouter>
        </OmnifoodProvider>
      </NatourProvider>
    </>
  );
}

export default App;
