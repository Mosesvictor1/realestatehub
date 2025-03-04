
import { motion } from "framer-motion";

import { useEffect, useState } from "react";
import { assets, projectsData } from "../assets/assets";

function Project() {
  const [index, setIndex] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(4);

  useEffect(() => {
    const updateSlidesPerView = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(1);
      } else if (window.innerWidth < 768) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(4);
      }
    };
    updateSlidesPerView();
    window.addEventListener("resize", updateSlidesPerView);
    return () => window.removeEventListener("resize", updateSlidesPerView);
  }, []);

  const nextSlide = () => {
    setIndex((prevIndex) =>
      prevIndex + slidesPerView >= projectsData.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? projectsData.length - slidesPerView : prevIndex - 1
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto py-10 text-center" id="Project">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500  mb-8 max-w-80 mx-auto">
        Crafting Spaces, Building Legacies-Explore Our Portfolio
      </p>

      <div className="relative mt-8 overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${(index / slidesPerView) * 100}%)`,
          }}
        >
          {projectsData.map((project) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              key={project.id}
              className={`w-full sm:w-1/2 md:w-1/3 lg:w-1/4 flex-shrink-0 p-4`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg w-full h-64 object-cover"
              />
              <div className="bg-white shadow-lg p-3 mt-2 rounded-md text-left">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-gray-500">
                  {project.price} | {project.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
        >
          <img src={assets.left_arrow} alt="Previous" className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 shadow-md rounded-full"
        >
          <img src={assets.right_arrow} alt="Previous" className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}

export default Project;
