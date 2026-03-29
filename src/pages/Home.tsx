import React, { Suspense } from 'react';
import Hero from '../components/Hero';
import Menu from '../components/Menu';

const Gallery = React.lazy(() => import('../components/Gallery'));
const Carousel3D = React.lazy(() => import('../components/Carousel3D'));
const Testimonials = React.lazy(() => import('../components/Testimonials'));
const About = React.lazy(() => import('../components/About'));
const MapSnippet = React.lazy(() => import('../components/MapSnippet'));

const Loader = () => (
  <div className="flex items-center justify-center p-24">
    <div className="w-8 h-8 rounded-full border-4 border-pink-500/20 border-t-pink-500 animate-spin" />
  </div>
);

export default function Home() {
  return (
    <main>
      <Hero />
      <Menu />
      <Suspense fallback={<Loader />}>
        <Gallery />
        <Carousel3D />
        <Testimonials />
        <About />
        <MapSnippet />
      </Suspense>
    </main>
  );
}
