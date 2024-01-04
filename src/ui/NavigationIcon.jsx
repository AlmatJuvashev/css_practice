import { useState } from "react";
import { twJoin } from "tailwind-merge";

function NavigationIcon({ onClick }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
    onClick();
  }

  return (
    <div>
      <input
        type="checkbox"
        id="navi-toggle"
        onClick={handleClick}
        className="hidden"
      />
      <label
        htmlFor="navi-toggle"
        className={twJoin([
          "h-[6rem] w-[6rem] z-[2000] fixed top-[6rem] right-[6rem] rounded-full bg-gray-50 flex items-center justify-center group",
        ])}
      >
        {!isClicked && (
          <span
            className={twJoin([
              "w-[3rem] h-1 bg-gray-700 inline-block relative transition-all",
              "after:w-[3rem] after:h-1 after:bg-gray-700 after:inline-block after:absolute after:left-0 after:top-[0.8rem] group-hover:after:top-[1rem]",
              "before:w-[3rem] before:h-1 before:bg-gray-700 before:inline-block before:absolute before:left-0 before:-top-[0.8rem] group-hover:before:-top-[1rem]",
            ])}
          >
            &nbsp;
          </span>
        )}
        {isClicked && (
          <span
            className={twJoin([
              "w-[3rem] h-1 bg-tranparent inline-block relative transition-all",
              "after:w-[2.5rem] after:h-1 after:bg-gray-700 after:inline-block after:absolute-center",
              "before:w-[2.5rem] before:h-1 before:bg-gray-700 before:inline-block before:absolute-center",
              "after:-rotate-[135deg] before:rotate-[135deg] group-hover:after:w-[3rem] group-hover:before:w-[3rem]",
            ])}
          >
            &nbsp;
          </span>
        )}
      </label>
    </div>
  );
}

export default NavigationIcon;
