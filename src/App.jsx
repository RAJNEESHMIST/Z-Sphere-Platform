import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import Header from './components/Header';
import Footer from './components/Footer';

import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen relative">
        <Header />
        <main className="flex-grow pt-20">
          <AppRoutes />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;
