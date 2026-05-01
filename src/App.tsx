import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyWandt from './components/WhyWandt';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="font-sans">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Services />
        <WhyWandt />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
