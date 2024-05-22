import { useState } from 'react';

export default function FaqItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="w-full text-left flex justify-between items-center"
        onClick={toggleOpen}
      >
        <span className="text-lg font-medium text-gray-800">{question}</span>
        <span className="text-lg font-medium text-gray-800">{isOpen ? '-' : '+'}</span>
      </button>
      {isOpen && <p className="mt-2 text-gray-600">{answer}</p>}
    </div>
  );
}