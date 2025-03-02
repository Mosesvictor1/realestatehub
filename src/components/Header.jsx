import Navbar from "./Navbar";
function Header() {
  return (
    <div
      className="min-h-screen mb-4 bg-cover bg-center flex items-center w-full overflow-hidden"
      style={{ backgroundImage: "url('/header_img2.jpg')" }}
      id="Header"
    >
      
      <div className="absolute top-0 left-0 w-full h-full bg-blue-950 opacity-40"></div>
      <Navbar />
      <div className="container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 text-white z-20">
        <h2 className="text-5xl sm:text-6xl md:text-[82px] inline-block max-w-3xl font-semibold pt-20">
          Find Your Dreame House By Us
        </h2>
        <div className="space-x-6 mt-16">
          <a href="#Projects" className="border border-white px-8 py-3 rounded">
            Projects
          </a>
          <a
            href="#Contact"
            className="bg-green-500 hover:bg-green-900 px-5 py-3 rounded text-sm"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
