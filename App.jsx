import React from 'react';
import Header from './components/layout/Header.jsx';
import Footer from './components/layout/Footer.jsx';
import HeroSection from './components/sections/HeroSection.jsx'; // Explicit .jsx
import ReachSection from './components/sections/ReachSection.jsx'; // Explicit .jsx
import DiscoverPathSection from './components/sections/DiscoverPathSection.jsx'; // Explicit .jsx

const App = () => {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      <main>
        <HeroSection />
        <ReachSection />
        <DiscoverPathSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
