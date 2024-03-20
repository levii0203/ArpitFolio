"use client"
import { useState, useEffect } from 'react';
import { Transition } from '@headlessui/react';

const AnimatedElement = ({ delay, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity transition-scale duration-500 ease-in-out ${
        isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'
      }`}
    >
      {children}
    </div>
  );
};




const TextAnimation = ({ text }) => {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <Transition
      show={show}
      enter="transition-opacity duration-1000"
      enterFrom="opacity-0"
      enterTo="opacity-100"
      leave="transition-opacity duration-1000"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center">
        <p className="text-3xl font-bold text-center">{text}</p>
      </div>
    </Transition>
  );
};

export default AnimatedElement;

