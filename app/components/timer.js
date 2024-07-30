"use client";
import { useState, useEffect } from 'react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    months: 0,
    years: 0
  });

  useEffect(() => {
    const targetDate = new Date('December 31, 2024 23:59:59');
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;

      let timeLeft = {
        years: 0,
        months: 0,
        days: 0
      };

      if (difference > 0) {
        timeLeft = {
          years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365)),
          months: Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30)),
          days: Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24))
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className='w-full flex gap-4 justify-start items-center'>
      <div className='text-center text-black space-y-4'>
        <h2 className='bg-[#CDBA9F] px-6 py-4 rounded-lg text-xl font-semibold leading-relaxed'>
          {timeLeft.days}
        </h2>
        <p className="text-center text-[#232323] text-xs font-medium font-['Manrope'] leading-[7px]">
          Days
        </p>
      </div>
      <div className='h-1 w-6 border-t-2 border-[#CDBA9F]'></div>
      <div className='text-center text-black space-y-4'>
        <h2 className='bg-[#CDBA9F] px-6 py-4 rounded-lg text-xl font-semibold leading-relaxed'>
          {timeLeft.months}
        </h2>
        <p className="text-center text-[#232323] text-xs font-medium font-['Manrope'] leading-[7px]">
          Months
        </p>
      </div>
      <div className='h-1 w-6 border-t-2 border-[#CDBA9F]'></div>
      <div className='text-center text-black space-y-4'>
        <h2 className='bg-[#CDBA9F] px-6 py-4 rounded-lg text-xl font-semibold leading-relaxed'>
          {timeLeft.years}
        </h2>
        <p className="text-center text-[#232323] text-xs font-medium font-['Manrope'] leading-[7px]">
          Years
        </p>
      </div>
    </div>
  );
};

export default Timer;
