import { scroller } from "react-scroll";

const pricingOptions = [
  {
    icon: "/price.png",
    title: "Holy Qur'an Lessons",
    items: [
      "Strengthen your recitation and understanding with our structured Qur'an classes.",
      "Duration: 40 minutes per lesson",
      "Package: 8 lessons",
    ],
    price: "$70"
  },
  {
    icon: "/price.png",
    title: "Arabic Language Lessons",
    items: [
      "Build your Arabic language skills for daily use, work, or deeper study.",
      "Duration: 1 hour per lesson",
      "Package: 8 lessons",
    ],
    price: "$100"
  },
  {
    icon: "/price.png",
    title: "Maqamat Lessons",
    items: [
      "Learn the art of Maqamat to enhance your recitation and spiritual connection.",
      "Duration: 1 hour per lesson",
      "Package: 8 lessons",
    ],
    price: "$150"
  },
];

const Pricing = () => {
  return (
    <section className="w-full bg-[#0f2d24] text-white px-4 md:px-[4rem] py-20 flex justify-center">
      <div className="w-full max-w-7xl flex flex-col items-center text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">
          Pricing Options – Flexible Plans for Every Student
        </h2>
        <p className="text-gray-300 max-w-2xl mb-12">
          We offer flexible payment options tailored to your program, lifestyle, and location —
          without hard pricing on the site. Here’s how you can invest in your Qur’an journey.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {pricingOptions.map((option, index) => (
            <div
              key={index}
              className="relative bg-[#16362c] pt-16 pb-10 px-6 rounded-t-[3rem] rounded-b-xl shadow-md hover:shadow-lg transition-all duration-300"
            >
              {/* Floating Icon */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-[#0f2d24] p-3 rounded-full shadow-md">
                <img src={option.icon} alt={option.title} className="h-10 w-10" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-4 text-center text-yellow-400">{option.title}</h3>

              {/* List */}
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-2 text-left">
                {option.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <h3 className="text-xl font-semibold ml-auto w-max mt-[1rem]">{option.price}</h3>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button onClick={()=> {
                                    scroller.scrollTo('contact', {
                                        smooth: "easeInOutQuart"
                                    })
                                   }} className="mt-14 bg-yellow-400 text-[#0f2d24] font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition">
          Book Your Free Evaluation →
        </button>
      </div>
    </section>
  );
};

export default Pricing;
