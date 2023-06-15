"use client";

import Marquee from "react-fast-marquee";
import { useState, useRef } from "react";

export default function MarqueeBar() {
  const marquee = useRef(null);

  const [isVisible, setIsVisible] = useState(true);
  const handleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    isVisible && (
      <div div className="flex justify-start  bg-transparent">
        <div
          className="w-8 p-1 transition-colors hover:cursor-pointer hover:bg-blue-600"
          onClick={() => handleVisibility()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="rgb(203 213 225)"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
        <Marquee
          ref={marquee}
          speed={50}
          autoFill="true"
          className="h-8 overflow-hidden whitespace-nowrap px-10 py-1 text-xs text-slate-300"
        >
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Skupujemy
          złom stalowy, metale kolorowe i inne surowce wtórne z okolic Sosnowca,
          Jaworzna, Katowic, Tychów, Dąbrowy Górniczej, Będzina, Czeladzi,
          Mysłowic oraz Mikołowa. Obejmujemy naszym działanem całe województwo
          Śląskie (Śląsk i Zagłębie). Przyjmujemy złom stalowy, metale kolorowe
          i inne surowce wtórne począwszy od makulatury i puszek aluminiowych, a
          skończywszy na akumulatorach. Proponujemy atrakcyjne ceny skupu
          aluminium, miedzi, mosiądzu, znalu, stali, żeliwa, makulatury,
          akumulatorów, ołowiu, cynku, brązu - w hurcie i detalu.
        </Marquee>
        <div className="w-10"></div>
      </div>
    )
  );
}
