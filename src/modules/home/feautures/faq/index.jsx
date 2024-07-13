import { useState } from "react";

function Accordion({ title, answer }) {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div>
      <div className="border-b border-black pt-3 px-3 hover:transition hover:ease-in-out delay-150  duration-700">
        <button
          onClick={() => setAccordionOpen(!accordionOpen)}
          className="flex justify-between w-full"
        >
          <span className="sm:text-xl text-sm font-semibold text-left">{title}</span>
          <svg
            className="fill-[#000000] shrink-0 ml-8"
            width="16"
            height="16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
            <rect
              y="7"
              width="16"
              height="2"
              rx="1"
              className={`transform origin-center rotate-90 transition duration-200 ease-out ${
                accordionOpen && "!rotate-180"
              }`}
            />
          </svg>
        </button>
        <div
          className={`grid overflow-hidden transition-all duration-300 ease-in-out text-[#000000] text-sm ${
            accordionOpen
              ? "grid-rows-[1fr] opacity-100 pt-4"
              : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="overflow-hidden pb-3 w-full  font-semibold text-sm sm:text-base">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQ() {
  const faqData = [
    {
      question:
        "How does Elpizo ensure the quality of its mobile repair services?",
      answer:
        "At Elpizo, we prioritize quality by exclusively using high quality components in our repairs. Our skilled technicians ensure meticulous attention to detail, leaving no room for compromise. Your satisfaction and device performance are our top priorities.",
    },
    {
      question: "Can i trust Elpizo for onsite mobile repair?",
      answer:
        "Absolutely! We understand the value of your time. With Elpizo, you can trust our expert engineers to bring the repair shop to your doorstep. Say goodbye to the inconvenience of travel and hello to hassle-free, professional onsite mobile repair services.",
    },
    {
      question: "What brands do you cover in your repair services?",
      answer:
        "Elpizo specializes in repairing a wide range of mobile brands, including but not limited to Apple, Samsung, OnePlus, and Google Pixel. Whether it's an iPhone or an Android device, we've got you covered with our expertise.",
    },
    {
      question: "How do i book an onsite mobile repair service with Elpizo",
      answer:
        "Booking with Elpizo is a breeze! Simply navigate to our website, select your city, and contact us. Our efficient system will guide you through the process, and our expert engineer will soon be at your doorstep, ready to fix your mobile device.",
    },
    {
      question: "Why should i choose onsite repair over traditional repair shops?",
      answer:
        "Opting for Elpizo's onsite repair is not just about fixing your device; it's about saving your time and convenience. We bring our services to you, eliminating the need for you to travel to a repair shop. It's a personalized, efficient, and hassle-free way to get your mobile device back in top shape.",
    },
  ];

  return (
    <div>
      <div className="w-full my-[5%] py-[5%] bg-[#F9F9F9] font-clash">
        <div className="">
          <div className="px-[5%]">
            <div className="grid sm:grid-cols-2 grid-cols-1 gap-4 sm:gap-20">
              <div className="col-span-1">
                <h6 className="font-semibold sm:text-lg text-sm uppercase">
                  HAve Questions
                </h6>
                <h2 className=" font-semibold sm:text-4xl text-xl">
                  Frequently Asked Questions
                </h2>
                <p className="my-[5%] text-sm">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected randomised words which don't look even
                  slightly believable. There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered
                  alteration
                </p>
                <p className="text-sm">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected randomised words which don't look even
                </p>
                <button className="bg-black px-4 py-3 rounded-md text-white text-sm mt-[3%]">
                  Ask Questions
                </button>
              </div>
              <div className="col-span-1">
                <div className="flex flex-col gap-3 mt-[1%]">
                  {faqData.map((faq, index) => (
                    <div key={index}>
                      <Accordion title={faq.question} answer={faq.answer} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
