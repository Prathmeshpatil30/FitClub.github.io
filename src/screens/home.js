import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Join from "../components/Join/Join";
import Programs from "../components/Programs/Programs";
import Reasons from "../components/Reasons/Reasons";
import Testimonials from "../components/Testimonials/Testimonials";
import "../App.css";
import Plans from "../components/Plans/Plans";

function Home() {
  return (
    <div className="App">
      <Hero />
      <Programs />
      <Reasons />
      <Plans />
      <Testimonials />
      <Join />
      <Footer />
    </div>
  );
}

export default Home;
