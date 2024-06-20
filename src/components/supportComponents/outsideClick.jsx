import React from "react";

function OutsideClick(props) {
  const fragmentRef = React.useRef(null);

  React.useEffect(() => {
    function handleClickOutside(event) {
      if (fragmentRef.current && !fragmentRef.current.contains(event.target)) {
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

export default OutsideClick;
