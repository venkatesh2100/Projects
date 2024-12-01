import { useState } from 'react';

const FAQData = [
  {
    question: 'How long do your meals last?',
    answer: 'Our meals are designed to stay fresh for up to 5 days when stored in the refrigerator.',
  },
  {
    question: 'Can I heat your baby meals?',
    answer: 'Yes, you can heat the baby meals in a microwave or stovetop as per the instructions provided.',
  },
  {
    question: 'How do I know your food is safe and top quality?',
    answer: 'We source ingredients from trusted suppliers and adhere to strict quality and safety standards.',
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex items-center justify-center bg-backgroundColor">
      <div className="max-w-4xl w-full py-10 px-4 bg-backgroundColor rounded-md">
        <div className='flex justify-center'>
            <img src="/green_leaf.png" alt="" />
        </div>
        <h2 className="text-3xl font-bold text-center mb-8">Your Questions, Answered</h2>
        <div className="space-y-4">
          {FAQData.map((faq, index) => (
            <div
              key={index}
              className={`border rounded-md overflow-hidden ${activeIndex === index ? 'bg-backgroundColor' : 'bg-backgroundColor'}`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center p-4 text-left focus:outline-none"
              >
                <span className="text-lg font-medium">{faq.question}</span>
                <span className="text-xl">
                  {activeIndex === index ? '−' : '+'}
                </span>
              </button>
              {activeIndex === index && (
                <div className="p-4 text-gray-700">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
