"use client";
import ContactBar from "./ContactBar";
import Menu from "./Menu";
import MarqueeBar from "./MarqueeBar";
import { useState, useCallback, useRef, useEffect } from "react";

export default function HeaderClientComponent({ email, phone, menuItems }) {
  // const [isFixed, setIsFixed] = useState(false);
  const menuRef = useRef(null);

  // const onScroll = useCallback((event) => {
  //   const menuBox = menuRef.current.getBoundingClientRect();
  //   const { scrollY } = window;

  //   if (scrollY >= 40) {
  //     setIsFixed(true);
  //     menuRef.current.classList.add("fixed top-0 z-50 backdrop-blur-sm");
  //   } else {
  //     setIsFixed(false);
  //   }
  // }, []);

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak with the cleanup
  //   return () => {
  //     window.removeEventListener("scroll", onScroll, { passive: true });
  //   };
  // }, [onScroll]);

  return (
    <div className="fixed top-0 z-50 backdrop-blur-sm">
      <div ref={menuRef} className="">
        {/* <div ref={menuRef} className="fixed top-0 z-50 backdrop-blur-sm"> */}
        <ContactBar phone={phone} email={email} />
        <Menu menuItems={menuItems} />
        {/* <MarqueeBar /> */}
      </div>
    </div>
  );
}
