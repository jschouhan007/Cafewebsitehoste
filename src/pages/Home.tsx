import React from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';
import Gallery from '../components/Gallery';
import Carousel3D from '../components/Carousel3D';
import Testimonials from '../components/Testimonials';
import About from '../components/About';
import MapSnippet from '../components/MapSnippet';

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <Gallery />
      <Carousel3D />
      <Testimonials />
      <About />
      <MapSnippet />
    </main>
  );
}
