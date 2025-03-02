import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Project from "./components/Project";
import PropertyCategories from "./components/PropertyCategories";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <PropertyCategories />
      <Project />
      <Testimonials />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
