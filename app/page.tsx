'use client';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Stats from '@/components/stats';
import Differentiators from '@/components/differentiators';
import ContactForm from '@/components/contact-form';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Stats />
      <Differentiators />
      <ContactForm />
    </main>
  );
}