import { propertyCategories } from "../assets/assets";


function PropertyCategories() {
    return (
      <section className="w-full max-w-6xl mx-auto py-10 text-center" id="Categories">
        {/* Section Title */}
        <h1 className="text-2xl sm:text-4xl decoration-1 under font-bold">
        Property{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
        By Categories
        </span>
      </h1>
        {/* Grid Layout */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {propertyCategories.map((category, index) => (
            <div
              key={index}
              className={`relative group overflow-hidden rounded-lg shadow-lg ${
                index === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-60 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center items-center text-white px-4">
                <h3 className="text-lg font-semibold">{category.name}</h3>
                <p className="text-sm">Great Deals Available</p>
                <span className="mt-2 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {category.listings} Listings
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default PropertyCategories;