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
          <span className="text-xl font-semibold">{title}</span>
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
          <div className="overflow-hidden pb-3 w-full  font-semibold text-base">
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
      question: "How do I place an order?",
      answer:
        "You can place an order by selecting the items you want to purchase and proceeding to checkout. Follow the steps to enter your shipping address, select payment method, and confirm your order.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept major credit cards (Visa, MasterCard, American Express), PayPal, and bank transfer for online purchases.",
    },
    {
      question: "Can I change or cancel my order?",
      answer:
        "Once an order has been placed, changes or cancellations may not be possible. Please contact our customer service as soon as possible for assistance.",
    },
    {
      question: "How do I return an item?",
      answer:
        "To initiate a return, please visit our returns page and follow the instructions. Make sure the item is unused and in its original packaging.",
    },
    {
      question: "Do you offer international shipping?",
      answer:
        "Yes, we offer international shipping to most countries. Shipping fees and delivery times may vary depending on the destination.",
    },
  ];

  return (
    <div>
      <div className="w-full my-[5%] py-[5%] bg-[#F9F9F9] font-clash">
        <div className="">
          <div className="px-[5%]">
            <div className="grid grid-cols-2 gap-20">
              <div className="col-span-1">
                <h6 className="font-semibold text-lg uppercase">
                  HAve QUestions
                </h6>
                <h2 className=" font-semibold text-4xl">
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
