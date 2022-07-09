import Head from "next/head";
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Treatment from '../components/Treatment';
import Staff from '../components/Staff';
import About from '../components/About';



function HomePage() {
  return (
    <div className="App" home>
        <Head>
            <title>Home - Trevor Sorbie</title>
        </Head>   
        <Navbar home />   
        <Hero />
        <Treatment />
        <Staff />
        <About />
        
    </div>
  );
}

export default HomePage;
