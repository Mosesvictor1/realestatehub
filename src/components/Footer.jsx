// function Footer() {
//   return (
//     <footer className="w-full bg-gray-900 text-white py-10 text-center">
//       <p>&copy; 2025 Estate. All rights reserved.</p>
//     </footer>
//   );
// }

import { Mail } from "lucide-react";

// export default Footer;

// import { Mail } from "lucide-react";

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-xl font-bold flex items-center space-x-2">
            <span className="w-6 h-6 bg-blue-500 rounded-full inline-block"></span>
            <span>Estate</span>
          </h2>
          <p className="text-gray-400 mt-3 text-sm">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text.
          </p>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-lg font-semibold">Company</h3>
          <ul className="mt-3 space-y-2 text-gray-400 text-sm">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Contact us
              </a>
            </li>           <li>
              <a href="#" className="hover:text-white">
                Privacy policy
              </a>
            </li>
          </ul>
        </div>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="text-lg font-semibold">Subscribe to our newsletter</h3>
          <p className="text-gray-400 text-sm mt-2">
            The latest news, articles, and resources, sent to your inbox weekly.
          </p>
          <div className="mt-4 flex items-center space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 text-black rounded-md border border-gray-700 focus:outline-none focus:border-blue-500"
            />
            <button className="bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 text-white flex items-center">
              <Mail size={16} className="mr-1" />
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center text-gray-500 text-sm mt-10">
        Copyright &copy; 2025 mosesdev. All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
