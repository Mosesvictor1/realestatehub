function Contact() {
  return (
    <div className="w-full max-w-6xl mx-auto py-10 text-center">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Contact{" "}
        <span className="underline underline-offset-4 decoration-1 under font-light">
          With Us
        </span>
      </h1>
      <p className="text-center text-gray-500  mb-8 max-w-80 mx-auto">
        Ready to Make a Move? let Build Your Future Together
      </p>

      <form className="mt-6 mx-8 space-y-4">
        <div className="flex gap-4 flex-col md:flex-row">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full md:w-1/2 p-3 border rounded bg-gray-300"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full md:w-1/2 p-3 border rounded bg-gray-300"
          />
        </div>
        <textarea
          placeholder="Message"
          className="w-full h-[10rem] p-3 border rounded bg-gray-300 resize-none"
        ></textarea>
        <button className="bg-green-500 hover:bg-green-900 text-white py-2 px-4 rounded">
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
