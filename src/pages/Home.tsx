import React from 'react';
import Hero from '../components/Hero';
import Programs from '../components/Programs';
import Stats from '../components/Stats';
import NewsEvents from '../components/NewsEvents';

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <Programs />
      <Stats />
      <NewsEvents />
    </main>
  );
}