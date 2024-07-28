"use client";
import Clients from './components/Clients';
import Deal from './components/Deal';
import Discover from './components/Discover';
import Footer from './components/Footer';
import Gifts from './components/Gifts';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import Wedding from './components/Wedding';
import Winter from './components/Winter';



export default function Home() {
  

  return (
    <main className="bg-[#FFFFFF]" style={{ scrollBehavior: 'smooth' }}>
      <Navbar />
      <Main />
      <Wedding />
      <Winter />
      <Discover />
      <Gifts />
      <Deal/>
      <Clients/>
      <Slider/>
      <Footer/>
    
      

      
    </main>
  );
}
