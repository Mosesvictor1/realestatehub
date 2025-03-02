import { assets } from "../assets/assets";

function About() {
  return (
    <div
      className="flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full bg-slate-200 overflow-hidden"
      id="About n"
    >
      <h1 className="text-2xl sm:text-4xl decoration-1 under font-bold">
        About{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          Our Brand
        </span>
      </h1>
      <p className="text-gray-500 max-w-80 text-center mb-8">
        Passionate About Properties, Dedication to Your Vision
      </p>
      <div className="flex flex-col md:flex-row items-center md:items-start md:gap-20">
        <img
          src={assets.brand_img2}
          alt=""
          className="w-full sm:w-1/2 max-w-lg "
        />
        <div className="flex flex-col items-center md:items-start mt-10 text-gray-600">
          <div className="grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28">
            <div>
              <p className="text-4xl font-medium text-gray-800">10+</p>
              <p>Years of Excellenes</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">14+</p>
              <p>Project Completed</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">23+</p>
              <p>Mn. Sq. Ft. Delivered</p>
            </div>

            <div>
              <p className="text-4xl font-medium text-gray-800">30+</p>
              <p>Ongoing Project</p>
            </div>
          </div>
          <p className="my-10 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Repudiandae, vel soluta dolorem saepe unde nobis praesentium cum ad
            reprehenderit quod.
          </p>
          <button className="bg-green-500 hover:bg-green-900 text-white px-6 py-2 rounded">Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default About;
