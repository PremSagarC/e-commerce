import './App.css';
import Header from './components/header/Header';
import Hero  from './components/hero/Hero';
import Slider from './components/slider/Slider'
import Virtual from './components/virtual/Virtual';
import Products from './components/products/Products';
import Testimonials from './components/testimonials/Testimonials.jsx';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero />
      <Slider />
      <Virtual />
      <Products />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;