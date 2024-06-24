import { OutsideProps } from "./types";
import React from "react";

export function OutsideClick(props: OutsideProps) {
  const fragmentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        fragmentRef.current &&
        !fragmentRef.current.contains(event.target as HTMLDivElement)
      ) {
        props.clickHandler();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [fragmentRef]);

  return (
    <div
      className={props?.className}
      onClick={props.onClick}
      style={props?.style}
      ref={fragmentRef}
    >
      {props.children}
    </div>
  );
}
