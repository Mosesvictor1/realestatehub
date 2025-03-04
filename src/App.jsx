import { motion } from "framer-motion";
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
      {[About, PropertyCategories, Project, Testimonials, Contact, Footer].map(
        (Component, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <Component />
          </motion.div>
        )
      )}
    </div>
  );
}

export default App;
