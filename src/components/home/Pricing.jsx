const pricingOptions = [
  {
    icon: "/price.png",
    title: "Monthly Subscription Plan",
    items: [
      "Pay monthly for a set number of weekly classes (e.g. 2x/week)",
      "Pause or cancel with notice",
      "Family discounts available",
      "Includes all core features",
    ],
  },
  {
    icon: "/price.png",
    title: "One-Time Payment Packages",
    items: [
      "Pay once for multi-month programs (e.g. 3 or 6 Month)",
      "Lower overall cost",
      "Full schedule security",
      "Flexible rescheduling during package",
    ],
  },
  {
    icon: "/price.png",
    title: "What’s Included in Every Plan",
    items: [
      "1-on-1 personalized lessons",
      "Progress tracking & student portal",
      "Community events & recordings",
      "Flexible scheduling and durations (30–60 mins)",
      "No hidden fees or surprise renewals",
      "Custom plans available",
    ],
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
              <h3 className="text-xl font-semibold mb-4 text-center">{option.title}</h3>

              {/* List */}
              <ul className="text-sm text-gray-200 list-disc list-inside space-y-2 text-left">
                {option.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <button className="mt-14 bg-yellow-400 text-[#0f2d24] font-semibold py-3 px-8 rounded-full hover:bg-yellow-300 transition">
          Book Your Free Evaluation →
        </button>
      </div>
    </section>
  );
};

export default Pricing;
