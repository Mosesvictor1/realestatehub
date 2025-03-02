// import { testimonialsData } from "../assets/assets";

import { testimonialsData } from "../assets/assets";

function Testimonials() {
  return (
    <div
      className="container w-full max-w-6xl mx-auto py-10 text-center"
      id="Testimonials"
    >
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Projects{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Completed
        </span>
      </h1>
      <p className="text-center text-gray-500  mb-8 max-w-80 mx-auto">
        Real Stories From Those Who Found Home with Us.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {testimonialsData.map((testimonial) => (
          <div
            key={testimonial.name}
            className="bg-white shadow-lg p-6 rounded-lg text-center"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-gray-400 overflow-hidden">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="mt-4 font-semibold text-lg">{testimonial.name}</h3>
            <p className="text-gray-500">{testimonial.title}</p>
            <p className="mt-2 text-gray-600">{testimonial.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
