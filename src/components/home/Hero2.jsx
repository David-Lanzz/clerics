const Hero2 = () => {
  return (
    <section className=" hero2 text-white min-h-screen flex items-center justify-center px-6">
      <div className="max-w-7xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Left Text Content */}
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Elevate Your <br /> Quranic Journey
          </h1>
          <p className="text-lg mb-4 text-gray-300">
            Join Quranique for a truly personal learning experience — one teacher,
            one student, one beautiful path to mastering the Quran.
          </p>
          <p className="text-lg mb-6 text-gray-300">
            From Egypt’s esteemed scholars to your home, our program offers unmatched depth,
            clarity, and connection.
          </p>
          <button className="bg-yellow-400 text-black font-medium px-6 py-3 rounded shadow hover:bg-yellow-500 transition">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero2;
