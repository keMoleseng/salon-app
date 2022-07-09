import Head from "next/head";
import Header from '../components/Header';
import Hero from '../components/Hero';
import Treatment from '../components/Treatment';
import Staff from '../components/Staff';
import About from '../components/About';
import ContactUs from '../components/ContactUs';


function HomePage() {
  return (
    <div className="App">
        <Head>
            <title>Home - Trevor Sorbie</title>
        </Head>
        <Header />
        <Hero />
        <Treatment />
        <Staff />
        <About />
        <ContactUs />
    </div>
  );
}

export default HomePage;
